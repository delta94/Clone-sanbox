import React, { Fragment } from 'react';
import WorkGalahadAppTabProfileItem from 'WorkGalahadAppTabProfileItem.react';
import WorkNavigationCenteredChannelToggle from 'WorkNavigationCenteredChannelToggle.react';
import 'cr:1822409';

const WorkNavigationCollapseButtonAndNubs = () => (
  <Fragment>
    <WorkNavigationCenteredChannelToggle />
    <div id='cr:1822409' />
    <WorkGalahadAppTabProfileItem />
  </Fragment>
);

export default WorkNavigationCollapseButtonAndNubs;