import { FETCH_SCHEDULES_SUCCEEDED, FETCH_SCHEDULES_FAILED } from './actions'

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
        default:
            return state;
    }
}