import { FETCH_SUCCEEDED, FETCH_FAILED, CHANGE_CHANNEL} from './actions'
import { FETCH_SCHEDULES_SUCCEEDED, FETCH_SCHEDULES_FAILED } from '../schedule/actions'
import { FETCH_TOP100_SUCCEEDED, FETCH_TOP100_FAILED } from '../top100/actions'

const initialState = {
  onAirIndex: 0,
  channels: [],
  schedules: [],
  top100: [],
}

export const homeReducer = (state= initialState, action) => {
  switch (action.type) {
    case CHANGE_CHANNEL:
      return { ...state, onAirIndex: action.index }
    case FETCH_SUCCEEDED:
      return { ...state, channels: action.data }
    case FETCH_FAILED:
      return { ...state }
    case FETCH_SCHEDULES_SUCCEEDED:
      return { ...state, schedules: action.data.after_live}
    case FETCH_SCHEDULES_FAILED:
      return { ...state }
    case FETCH_TOP100_SUCCEEDED:
      return { ...state, top100: action.data}
    case FETCH_TOP100_FAILED:
      return { ...state }
    default:
      return state;
  }
}