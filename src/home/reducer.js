import { FETCH_SUCCEEDED, FETCH_FAILED} from './actions';

const initialState = {
  onAirIndex: 0,
  channels: [],
  products: [],
}

export const homeReducer = (state= initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        channels: action.data
      })
    case FETCH_FAILED:
      return { ...state }
    default:
      return state;
  }
}