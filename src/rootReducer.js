import { createStore, combineReducers } from 'redux';
import { homeReducer } from './home/reducer';
import { productReducer } from './product/reducer';
import { scheduleReducer } from './schedule/reducer';
import { headerReducer } from './layout/reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  homeReducer,
  productReducer,
  scheduleReducer,
  headerReducer,
  routing: routerReducer,
});

export const rootStore = createStore(rootReducer)

let unsubscribe = rootStore.subscribe(() =>
  console.log(rootStore.getState())
)
 
unsubscribe()