// 1724

import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const routers = [
  {
    path: "/zing-chart",
    component: Loadable({
      loader: () => import('./components/ZingChart'),
      loading: Loading,
    })
  },
  {
    path: "/zing-chart/realtime",
    component: Loadable({
      loader: () => import('./components/ZingChartRealtime'),
      loading: Loading,
    })
  },
  {
    path: "/zing-chart-tuan/:alias/:id.html",
    component: Loadable({
      loader: () => import('./components/ZingChartTuan'),
      loading: Loading,
    })
  }
];

const App = () => (
  <React.Fragment>
    {routers.map((route, i) => <Route key={i} {...route} />)}
  </React.Fragment>
);

export { routers };
export default App;

