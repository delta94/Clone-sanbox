import React from 'react';
import fbt from 'fbt';
import testID from 'testID';

const WorkGalahadUIAppsLists = (props) => {
const { children } = props;
return (
<div
role="grid"
aria-label={fbt._('Workplace apps', 'Workplace apps')}
className="x78zum5 xdt5ytf x5yr21d x1iyjqo2"
{...testID('galahad-nav-column')}
>
{children}
</div>
);
};

WorkGalahadUIAppsLists.displayName = WorkGalahadUIAppsLists [from ${f.id}];

export default WorkGalahadUIAppsLists;
