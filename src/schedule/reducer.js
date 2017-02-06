import { 
    FETCH_SCHEDULES_SUCCEEDED,
    FETCH_SCHEDULES_FAILED,
    FILTER_CATEGORY_CHANGED,
    FILTER_CHANNEL_CHANGED,
} from './actions'

const initialState = {
    filter: {
        date: '',
        categories: [],
        channels: [],
    },
    rawSchedules: {},
    filteredSchedules: {},
}

const getFilteredSchedules = (filter, rawSchedules) => {
    let newSchedules = {
        before_live: [],
        live: [],
        after_live: [],
    }
    
    if (filter.categories.length > 0 || filter.channels.length > 0) {
        // BEFORE LIVE 
        for (let j=0; j<rawSchedules.before_live.length; j++) {
            let filteredData = {
                data: [],
                time: rawSchedules.before_live[j].time
            }
            for (let k=0; k<rawSchedules.before_live[j].data.length; k++) {
                let categoryIndex = filter.categories.length > 0 ? filter.categories.indexOf(rawSchedules.before_live[j].data[k].cate1) : -3
                let channelIndex = filter.channels.length > 0 ? filter.channels.indexOf(rawSchedules.before_live[j].data[k].genre2) : -3
                
                if (categoryIndex !== -3 && channelIndex !== -3) {
                    if (categoryIndex > -1 && channelIndex > -1) {
                        filteredData.data.push(rawSchedules.before_live[j].data[k])
                    } 
                } else {
                    if (categoryIndex > -1 || channelIndex > -1) {
                        filteredData.data.push(rawSchedules.before_live[j].data[k])
                    }
                }
            }
            newSchedules.before_live.push(filteredData)
        }

        // LIVE
        for (let j=0; j<rawSchedules.live.length; j++) {
            let filteredData = {
                data: [],
                time: rawSchedules.live[j].time
            }
            for (let k=0; k<rawSchedules.before_live[j].data.length; k++) {
                let categoryIndex = filter.categories.length > 0 ? filter.categories.indexOf(rawSchedules.live[j].data[k].cate1) : -3
                let channelIndex = filter.channels.length > 0 ? filter.channels.indexOf(rawSchedules.live[j].data[k].genre2) : -3
                
                if (categoryIndex !== -3 && channelIndex !== -3) {
                    if (categoryIndex > -1 && channelIndex > -1) {
                        filteredData.data.push(rawSchedules.live[j].data[k])
                    } 
                } else {
                    if (categoryIndex > -1 || channelIndex > -1) {
                        filteredData.data.push(rawSchedules.live[j].data[k])
                    }
                }
            }
            newSchedules.live.push(filteredData)
        }

        // AFTER LIVE
        for (let j=0; j<rawSchedules.after_live.length; j++) {
            let filteredData = {
                data: [],
                time: rawSchedules.after_live[j].time
            }
            for (let k=0; k<rawSchedules.after_live[j].data.length; k++) {
                let categoryIndex = filter.categories.length > 0 ? filter.categories.indexOf(rawSchedules.after_live[j].data[k].cate1) : -3
                let channelIndex = filter.channels.length > 0 ? filter.channels.indexOf(rawSchedules.after_live[j].data[k].genre2) : -3
                
                if (categoryIndex !== -3 && channelIndex !== -3) {
                    if (categoryIndex > -1 && channelIndex > -1) {
                        filteredData.data.push(rawSchedules.after_live[j].data[k])
                    } 
                } else {
                    if (categoryIndex > -1 || channelIndex > -1) {
                        filteredData.data.push(rawSchedules.after_live[j].data[k])
                    }
                }
            }
            newSchedules.after_live.push(filteredData)
        }
    } else {
        return rawSchedules
    }

    return newSchedules
}

export const scheduleReducer = (state=initialState, action) => {
    let newFilter = {}
    let newSchedules = {}
    switch (action.type) {
        case FETCH_SCHEDULES_SUCCEEDED:
            newFilter = {
                date: action.date ? new Date(action.date).getDate().toString() : '',
                categories: [],
                channels: [],
            } 
            return { ...state, filter: newFilter, rawSchedules: action.data, filteredSchedules: action.data}
        case FETCH_SCHEDULES_FAILED:
            return { ...state }
        case FILTER_CATEGORY_CHANGED:
            if (action.value) {
                newFilter = {...state.filter, categories: state.filter.categories.concat(action.category)}
            } else {
                state.filter.categories.splice(state.filter.categories.indexOf(action.category),1)
                newFilter = {...state.filter}
            }
            newSchedules = getFilteredSchedules(newFilter, state.rawSchedules)
            return { ...state, filter: newFilter, filteredSchedules: newSchedules }
        
        case FILTER_CHANNEL_CHANGED:
            if (action.value) {
                newFilter = {...state.filter, channels: state.filter.channels.concat(action.channel)}
            } else {
                state.filter.channels.splice(state.filter.channels.indexOf(action.channel),1)
                newFilter = {...state.filter}
            }
            newSchedules = getFilteredSchedules(newFilter, state.rawSchedules)
            return { ...state, filter: newFilter, filteredSchedules: newSchedules }
        default:
            return state;
    }
}