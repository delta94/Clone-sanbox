import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import classNames from "classnames/bind";
import { BillboardHelpers } from "discovery-shared-ui";
import Flair from "../Flair";
import { PlayButton } from "../PlayButton";
import BillboardSupplementalMessage from "./BillboardSupplementalMessage";
import TopTenOverlay from "../TopTenOverlay";
import BillboardExpires from "./BillboardExpires";
import styles from "./styles.scss";

class BillboardRow extends React.Component {
  static propTypes = {
    billboardData: PropTypes.object.isRequired,
    trackIds: PropTypes.shape({
      trackId_jaw: PropTypes.number,
      trackId_jawEpisode: PropTypes.number,
      trackId_jawTrailer: PropTypes.number
    }),
    rowNum: PropTypes.number,
    onClick: PropTypes.func,
    onLoaded: PropTypes.func,
    hasLowerDivider: PropTypes.bool,
    playButtonClassName: PropTypes.string,
    className: PropTypes.string,
    layoutType: PropTypes.string
  };

  static contextTypes = {
    discoveryApp: PropTypes.object.isRequired,
    formatString: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    const { billboardData } = props;
    this.state = {
      useAvailablePhase: BillboardHelpers.getAvailabilityTimeRemaining(billboardData) <= 0,
      billboardVideoID: billboardData && billboardData.id
    };
  }

  componentWillUnmount() {
    clearTimeout(this.disposeTimeout);
  }

  getRequestId = () => {
    return _.get(this.context.discoveryApp, "modelMetadata.requestMetadata.requestId");
  };

  getId = () => {
    return _.get(this.context.discoveryApp, "modelMetadata.requestMetadata.listId");
  };

  getTrackId = () => {
    const { billboardData } = this.props;
    const trackId = _.get(billboardData, "contentData.trackInfo.trackId");
    return trackId ? parseInt(trackId, 10) : null;
  };

  handleClick = event => {
    const { onClick, billboardData } = this.props;
    const isDisabled = _.get(billboardData, "contentData.isDisabled", false);
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  handleLoaded = () => {
    const { onLoaded } = this.props;
    if (onLoaded) {
      onLoaded();
    }
  };

  render() {
    const {
      billboardData,
      hasLowerDivider,
      playButtonClassName,
      className,
      layoutType
    } = this.props;
    const { useAvailablePhase, billboardVideoID } = this.state;
    const trackId = this.getTrackId();
    const imageUrl = BillboardHelpers.getImageUrl(
      billboardData,
      "horizontalBackground"
    );
    const title = _.get(billboardData, "contentData.title");
    const summary = _.get(billboardData, "contentData.summary");
    const subTitle = _.get(billboardData, "contentData.subtitle");
    const itemSummary = _.get(billboardData, "contentData.itemSummary");
    const brand = _.get(billboardData, "contentData.brand");
    const maturity = _.get(billboardData, "contentData.maturity");
    const videoAssets = _.get(billboardData, "videoAssets");
    const motionId = _.get(videoAssets, "horizontalBackground.motionId");

    const showTopTenOverlay = _.get(
      billboardData,
      "truths.data.isTop10Supported",
      false
    );