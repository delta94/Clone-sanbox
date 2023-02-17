import React from "react";
import { useStateValue } from "./state";
import { List } from "./list";
import { SongList } from "./song-list";
import { SongItem } from "./song-item";
import { getPlayerState } from "./player";

const PrefixChartPromote = () => (
  <List.Item className="prefix-chart-promote">
    <List.Item renderAs="span">Gợi ý</List.Item>
  </List.Item>
);

const ChartPromote = ({ item }) => {
  const [playerState] = useStateValue();
  const [player] = getPlayerState(playerState);

  if (!item) return null;

  return (
    <SongList
      sectionId="chart-promote"
      items={[item]}
      SongItemComponent={PrefixChartPromote}
      SongItemProps={{
        className: "bor-b-1",
        playFn: (song) => player.playSong(song),
      }}
    />
  );
};

export default ChartPromote;



import React, { useRef } from 'react';
import classnames from 'classnames';
import { usePlaylistContext } from 'src/context/playlist';
import { LoadingIndicator } from 'src/components/loading-indicator';
import { SongList } from 'src/components/song-list';
import { SongItem } from 'src/components/song-item';
import { PlaylistService } from 'src/services/playlist-service';
import { PlayModes } from 'src/types/playlist';
import { merge, pick } from 'lodash-es';
import { Playlist } from 'src/types/playlist';
import { PromotionItem } from 'src/components/promotion-item';

const ChartSection = ({ chartData, songs, isExpand = true, loading, minItems = 10, sectionId, setExpand, promote }) => {
  const player = usePlaylistContext();
  const sectionHeaderRef = useRef();

  const items = isExpand ? songs : songs.slice(0, minItems);
  return (
    <div className={classnames('rt-chart-section')}>
      <div className="chart-wrapper">
        <div className="bg-blur" />
        <div className="bg-alpha" />
        <div className="bg-alpha-1" />
        <div className="section-header">
          <div className="chart-title" ref={sectionHeaderRef}>
            <div title="24H">#zingchart</div>
            <div
              icon="play"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                player.playPlaylistWithId(Playlist.PLAYLIST, sectionId, true);
              }}
            />
          </div>
        </div>
        {/* Render chart here */}
      </div>
      {promote && <PromotionItem item={promote} />}
      <SongList
        items={items}
        sectionId={sectionId}
        playlist={Playlist.PLAYLIST}
        SongItemComponent={SongItem}
        playSongFn={(song, extra) => {
          if (song) {
            song.sectionId = sectionId;
            PlaylistService.getDetail(Playlist.PLAYLIST).then((playlist) => {
              playlist.data.sectionId = sectionId;
              playlist.data.playItemMode = PlayModes.RANDOM;
              player.playSongInPlaylist(
                song,
                merge(
                  {
                    playlist: pick(playlist.data, ['id', 'title', 'images']),
                    items: songs,
                  },
                  extra,
                ),
              );
            }).catch(() => {
              player.playSong(song);
            });
          }
        }}
        SongItemProps={{
          className: 'bor-b-1',
        }}
        className="mar-b-20"
      />
      {loading && <LoadingIndicator showTitle={false} />}
      {!isExpand && (
        <div className="is-center">
            <div
            className="show-all is-outlined"
            onClick={setExpand}
        >
            Xem top 100
            </div>
        </div>
    )}
     
</div>
);
}



import React, { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Column, List, Button } from 'rbx';
import classnames from 'classnames';
import { useStore } from 'store/index';
import { SongList } from 'components/SongList';
import { PlaylistService } from 'services/playlist';
import { playMode } from 'constants/player';

const WeekChartSong = React.memo(({ order, song }) => {
  const rankNumber = order || 1;
  return (
    <SongList.Song
      type={playMode.SORT}
      rankNumber={rankNumber}
      className="mar-r-15"
      rankingStatus={song.rankingStatus}
      {...song}
    />
  );
});

const CHART_COUNTRY = {
  vn: 'Việt Nam',
  us: 'US-UK',
  korea: 'K-Pop'
};

const WeekChart = React.memo(({ data, sectionId }) => {
  const [globalState] = useStore();
  const { items = [], country, link, playlistId } = data;
  const topFive = useMemo(() => items.slice(0, 5), [items]);
  const playSong = useCallback((song, additionalData) => {
    if (song) {
      song.sectionId = sectionId;
      PlaylistService.getDetail(playlistId)
        .then(({ data: playlistData }) => {
          playlistData.sectionId = sectionId;
          globalState.playSongInPlaylist(
            song,
            {
              playlist: playlistData,
              items: playlistData.song?.items || [song],
              ...additionalData
            }
          );
        })
        .catch(() => {
          globalState.playSong(song);
        });
    }
  }, [globalState, playlistId, sectionId]);

  if (!topFive.length) return null;

  return (
    <Column
      fullhd={4}
      widescreen={4}
      desktop={4}
      touch={12}
      tablet={12}
    >
      <List className={classnames('week-chart-box', country)}>
        <List.Item className={classnames('box-header')}>
          <Link to={link}>{CHART_COUNTRY[country]}</Link>
          <Button
            icon="play"
            onClick={() => globalState.playPlaylistWithId(playlistId, sectionId, true)}
          />
        </List.Item>
        <SongList
          items={topFive}
          SongItemComponent={WeekChartSong}
          className="mar-b-15"
          playSongFn={playSong}
        />
        <List.Item className="is-center">
          <Link to={data.link} className={classnames('show-all')}>
            Xem tất cả
          </Link>
        </List.Item>
      </List>
    </Column>
  );
});

export default WeekChart





import React, { memo, useState, useEffect, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getHome } from './actions';
import { chartSelector } from './selectors';
import { useFocus } from '../../utils/focus';
import { HomeWeekChart, HomeRTChart } from './components';

const HomePage = memo(() => {
  const chart = useSelector(chartSelector);
  const [state, setState] = useState({});
  const focus = useFocus();
  const [isActive, setIsActive] = useState(false);
  const homePageRef = useRef(document.getElementById('home-page'));

  useEffect(() => {
    const focus = (focus.state || {}).focus;
    homePageRef.current = Boolean(focus);
    homePageRef.current && setIsActive(true);
  }, [focus.state]);

  const weekChart = useMemo(() => {
    const weekChart = (chart.data || {}).weekChart || {};
    return Object.keys(weekChart).map((key) => weekChart[key]) || [];
  }, [chart.data]);

  const RTChart = useMemo(() => {
    const RTChart = (chart.data || {}).RTChart || {};
    return (RTChart.items || []) || [];
  }, [chart.data]);

  useEffect(() => {
    const data = chart.data;
    if (data) {
      const RTChart = (data.RTChart || {}).chart || {};
      const RTChartItems = (data.RTChart || {}).items || [];
      let datasets = [],
        state = {};
      if (Object.entries(RTChart).length) {
        Object.keys(RTChart.items).forEach((key, index) => {
          const counter = (RTChart.items[key] || []).map((item) => item.counter);
          datasets.push({
            label: key,
            data: counter,
            song: RTChartItems[index],
          });
        });
        state = {
          labels: (RTChart.times || []).map((time) => time.hour),
          datasets: datasets,
          minScore: RTChart.minScore,
          maxScore: RTChart.maxScore,
          totalScore: RTChart.totalScore,
        };
      }
      setState(state);
    }
  }, [chart.data]);

  return (
    <div className="home-page" id="home-page" ref={homePageRef}>
      {weekChart.length > 0 && <HomeWeekChart data={weekChart} />}
      {RTChart.length > 0 && <HomeRTChart data={state} />}
    </div>
  );
});

export default HomePage;

