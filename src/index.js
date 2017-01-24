import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import App from './App';
import { HomeContainer } from './home';
import { rootStore } from './rootReducer';

ReactDOM.render((
  <Provider store={rootStore}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path="top" component={App}/>
        <Route path="product" component={App} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);
