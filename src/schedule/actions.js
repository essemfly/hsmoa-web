export const FETCH_SCHEDULES_REQUESTED = 'FETCH_SCHEDULES_REQUESTED'
export const FETCH_SCHEDULES_SUCCEEDED = 'FETCH_SCHEDULES_SUCCEEDED'
export const FETCH_SCHEDULES_FAILED = 'FETCH_SCHEDULES_FAILED'

export const FILTER_CATEGORY_CHANGED = 'FILTER_CATEGORY_CHANGED'
export const FILTER_CHANNEL_CHANGED = 'FILTER_CHANNEL_CHANGED'

export const OPEN_CALENDAR = 'OPEN_CALENDAR'

export const fetchSchedulesRequested = (date) => ({
    type: FETCH_SCHEDULES_REQUESTED, date: date ? date: new Date(),
})

export const filterCategoryChanged = (category, val) => ({
    type: FILTER_CATEGORY_CHANGED, value: val, category: category
})

export const filterChannelChanged = (channel, val) => ({
    type: FILTER_CHANNEL_CHANGED, value: val, channel: channel
})

export const openCalendar = () => ({
    type: OPEN_CALENDAR
})