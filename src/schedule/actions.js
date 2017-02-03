export const FETCH_SCHEDULES_REQUESTED = 'FETCH_SCHEDULES_REQUESTED'
export const FETCH_SCHEDULES_SUCCEEDED = 'FETCH_SCHEDULES_SUCCEEDED'
export const FETCH_SCHEDULES_FAILED = 'FETCH_SCHEDULES_FAILED'

export const FILTER_CATEGORY_CHANGED = 'FILTER_CATEGORY_CHANGED'
export const FILTER_CHANNEL_CHANGED = 'FILTER_CHANNEL_CHANGED'
export const FILTER_DAY_CHANGED = 'FILTER_DAY_CHANGED'

export const fetchSchedulesRequested = () => ({type: FETCH_SCHEDULES_REQUESTED })

export const filterCategoryChanged = (category, val) => ({
    type: FILTER_CATEGORY_CHANGED, value: val, category: category
})

export const filterChannelChanged = (channel, val) => ({
    type: FILTER_CHANNEL_CHANGED, value: val, channel: channel
})

export const filterDayChanged = (day) => ({
    type: FILTER_DAY_CHANGED, day:day
})