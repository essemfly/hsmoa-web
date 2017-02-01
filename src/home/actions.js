export const FETCH_REQUESTED = 'FETCH_REQUESTED';
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

export const fetchRequested = () => ({ type: FETCH_REQUESTED })

export const changeChannel = (index) => ({ type: CHANGE_CHANNEL, index: index})