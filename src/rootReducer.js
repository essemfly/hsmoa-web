import { createStore, combineReducers } from 'redux';
import { homeReducer } from './home/reducer';
import { productReducer } from './product/reducer';
import { scheduleReducer } from './schedule/reducer';

const rootReducer = combineReducers({
  homeReducer,
  productReducer,
  scheduleReducer,
});

export const rootStore = createStore(rootReducer)


let unsubscribe = rootStore.subscribe(() =>
  console.log(rootStore.getState())
)