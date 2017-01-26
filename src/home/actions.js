export const FETCH_REQUESTED = 'FETCH_REQUESTED';
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchRequested = () => {
    return { type: FETCH_REQUESTED }
}

export const fetchSucceeded = () => {
    return { type: FETCH_SUCCEEDED }
}

export const fetchFailed = () => {
    return { type: FETCH_FAILED }
}