import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'PolarisReactRedux';
import { openReelsMedia, loadReelsMediaForTray } from 'PolarisStoryActions';
import { updateZeroNUXPreference } from 'PolarisZeroActions';
import { ZeroNUXMedia } from 'PolarisZeroRatingUtils';
import { getSeenCountInStoryTray, getFeedStoryItemsWithoutOwn, userHasReel, getIsFullySeen, getFeedStoryTrayWithoutOwn } from 'PolarisstorySelectors';
import { useCometRouterDispatcher } from 'useCometRouterDispatcher';
import { StoryTray } from 'PolarisStoryTray.react';
import { nullthrows, qex } from 'qex';
import { buildUserStoryLinkWithMediaId } from 'PolarisLinkBuilder';


const j = 5;

const PolarisStoryTrayContainer = (props) => {
  const seenCount = useSelector((state) => getSeenCountInStoryTray(state));
  const dispatch = useDispatch();
  const routerDispatcher = useCometRouterDispatcher();
  const store = useStore();
  const users = store.getState().users.users;
  const selector = useSelector((state) => ({
    dataFetchStatus: state.feed.extrasDataFetchStatus,
    hasOwnReel: userHasReel(state, nullthrows(state.users.viewerId)),
    hasSeenZeroNUX: !!state.zero.nuxPreference.story,
    isFullySeen: getIsFullySeen(state),
    items: getFeedStoryItemsWithoutOwn(state),
    loadingId: state.stories.trayLoadingId,
    newReelCount: state.stories.feedTray && state.stories.feedTray.count() - nullthrows(seenCount),
    reels: getFeedStoryTrayWithoutOwn(state),
    seenReelCount,
    storyPrefetchFinished: state.feed.storyPrefetchComplete,
    traySession: state.stories.traySession,
    viewerId: state.users.viewerId,
    viewportHeight: state.displayProperties.viewportHeight,
    viewportWidth: state.displayProperties.viewportWidth,
  }), shallowEqual);

  const openReel = (userId, itemIds, reelId) => {
    dispatch(openReelsMedia(userId, 'reel_feed_timeline', itemIds, reelId));
  };

  const updateZeroNUX = () => {
    dispatch(updateZeroNUXPreference(ZeroNUXMedia.story));
  };

  const loadReelMedia = (reelId, itemIds) => {
    dispatch(loadReelsMediaForTray(reelId, itemIds, { batchSize: 15, fetchDistance: 5 }));
  };

  const onStoryItemScrollEnter = (reelId, cursor) => {
    dispatch(loadReelsMediaForTray(reelId, cursor, { batchSize: 15, fetchDistance: 5 }));
  };

  const onUpdateZeroNUXPreference = () => {
    dispatch(updateZeroNUXPreference(ZeroNUXMedia.story));
  };


  useEffect(() => {
    if (_("1358") === true) {
      const reels = selector.reels;
      if (reels) {
        reels.forEach((reel, index) => {
          if (index < j && reel.userId != null) {
            let user = users.get(reel.userId);
            let itemId = reel.itemIds != null && reel.itemIds.length > 0 ? reel.itemIds[0] : null;
            if (user != null && user.username != null && itemId != null) {
              let link = buildUserStoryLinkWithMediaId(user.username, itemId);
              routerDispatcher != null && routerDispatcher.prefetchRouteDefinition(link);
            }
          }
        });
      }
    }
  }, [routerDispatcher, selector.reels, users]);

  return <StoryTray {...props} {...selector} onLoadReel={openReel} onStoryItemScrollEnter={onStoryItemScrollEnter} onUpdateZeroNUXPreference={onUpdateZeroNUXPreference} />;
}