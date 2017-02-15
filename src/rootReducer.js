import { createStore, combineReducers, applyMiddleware } from 'redux';

import { homeReducer } from './home/reducer';
import { productReducer } from './product/reducer';
import { scheduleReducer } from './schedule/reducer';
import { headerReducer } from './layout/reducer';
import { top100Reducer } from './top100/reducer';
import { routerReducer } from 'react-router-redux';
import { searchReducer } from './search/reducer';

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga';

const rootReducer = combineReducers({
  homeReducer,
  productReducer,
  scheduleReducer,
  headerReducer,
  top100Reducer,
  searchReducer,
  routing: routerReducer,
});

const sagaMiddleware = createSagaMiddleware()

export const rootStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

let unsubscribe = rootStore.subscribe(() =>
  console.log(rootStore.getState())
)
 
unsubscribe()