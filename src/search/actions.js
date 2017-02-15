export const SEARCH_KEWORD_REQUESTED = 'SEARCH_KEWORD_REQUESTED'
export const SEARCH_KEWORD_SUCCEEDED = 'SEARCH_KEWORD_SUCCEEDED'
export const SEARCH_KEWORD_FAILED = 'SEARCH_KEWORD_FAILED'

export const FILTER_CHANGE_REQUESTED = 'FILTER_CHANGED_REQUESTED'
export const FILTER_CHANGE_SUCCEEDED = 'FILTER_CHANGE_SUCCEEDED'
export const FILTER_CHANGE_FAILED = 'FILTER_CHANGE_FAILED'

export const REFRESH_SEARCH_REQUESTED = 'REFRESH_SEARCH_REQUESTED'
export const REFRESH_SEARCH_SUCCEEDED = 'REFRESH_SEARCH_SUCCEEDED'
export const REFRESH_SEARCH_FAILED = 'REFRESH_SEARCH_FAILED'


export const searchKeywordRequested = (keyword) => ({ type: SEARCH_KEWORD_REQUESTED, keyword: keyword })


export const filterLiveStatusChanged = () => ({ type: FILTER_CHANGE_REQUESTED })

export const filterCategoryChanged = (filter, category, val) => {
    let newFilter = {}
    if (val) {
        newFilter = { ...filter, selectedCategory: category }
    } else {
        newFilter = { ...filter, selectedCategory: {}}
    }
    return (
        { type: FILTER_CHANGE_REQUESTED, filter: newFilter, }
    )
}

export const filterChannelChanged = (filter, channel, val) => {
    let newFilter = {}
    if (val) {
        newFilter = { ...filter, selectedChannels: filter.selectedChannels.concat(channel.key)}
    } else {
        for (let i=0; i<filter.selectedChannels.length; i++) {
            if (filter.selectedChannels[i] === channel.key) {
                newFilter = { ...filter }
                newFilter.selectedChannels.splice(i,1)
            }
        }
    }
    return (
        { type: FILTER_CHANGE_REQUESTED, filter: newFilter, }
    )
}