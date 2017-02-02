import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import App from './App';
import { HomeContainer } from './home';
import { Top100Container } from './top100';
import { ScheduleContainer } from './schedule';
import { rootStore } from './rootReducer';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, rootStore)

ReactDOM.render((
  <Provider store={rootStore}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path="top" component={Top100Container}/>
        <Route path="schedule" component={ScheduleContainer} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);
