import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import { rootStore } from './rootReducer';
import { HomeContainer } from './home';
import { ProductContainer } from './product';
import { SearchContainer } from './search';
import { Top100Container } from './top100';
import { ScheduleContainer } from './schedule';
import { syncHistoryWithStore } from 'react-router-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const history = syncHistoryWithStore(browserHistory, rootStore)

  ReactDOM.render((
  <Provider store={rootStore}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path="top" component={Top100Container}/>
        <Route path="schedule" component={ScheduleContainer} />
        <Route path="i/:entryId" component={ProductContainer} />
        <Route path="search/:keyword" component={SearchContainer} />
      </Route>
    </Router>
  </Provider>
  ),
  div);
});
