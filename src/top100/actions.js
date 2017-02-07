export const FETCH_TOP100_REQUESTED = 'FETCH_TOP100_REQUESTED';
export const FETCH_TOP100_SUCCEEDED = 'FETCH_TOP100_SUCCEEDED';
export const FETCH_TOP100_FAILED = 'FETCH_TOP100_FAILED';

export const fetchTop100ProductsRequested = (category) => ({ type: FETCH_TOP100_REQUESTED, category: category })