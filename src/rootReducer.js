import { createStore, combineReducers, applyMiddleware } from 'redux';

import { homeReducer } from './home/reducer';
import { productReducer } from './product/reducer';
import { scheduleReducer } from './schedule/reducer';
import { headerReducer } from './layout/reducer';
import { routerReducer } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga';

const rootReducer = combineReducers({
  homeReducer,
  productReducer,
  scheduleReducer,
  headerReducer,
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