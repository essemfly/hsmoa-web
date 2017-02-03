import { 
    FETCH_SCHEDULES_SUCCEEDED,
    FETCH_SCHEDULES_FAILED,
    FILTER_CATEGORY_CHANGED,
    FILTER_CHANNEL_CHANGED,
    FILTER_DAY_CHANGED 
} from './actions'

const initialState = {
    filter: {
        date: '',
        categories: [],
        channel: [],
    },
    rawSchedules: {},
    filteredSchedules: {},
}

export const scheduleReducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_SCHEDULES_SUCCEEDED:
            return { ...state, rawSchedules: action.data, filteredSchedules: action.data}
        case FETCH_SCHEDULES_FAILED:
            return { ...state }
        case FILTER_CATEGORY_CHANGED:
            return { ...state }
        case FILTER_CHANNEL_CHANGED:
            return { ...state }
        case FILTER_DAY_CHANGED:
            return { ...state }
        default:
            return state;
    }
}