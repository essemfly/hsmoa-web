export const FETCH_TOP100_REQUESTED = 'FETCH_TOP100_REQUESTED';
export const FETCH_TOP100_SUCCEEDED = 'FETCH_TOP100_SUCCEEDED';
export const FETCH_TOP100_FAILED = 'FETCH_TOP100_FAILED';

export const CHANGE_CATEOGRY = 'CHANGE_CATEGORY';

export const fetchTop100ProductsRequested = () => ({ type: FETCH_TOP100_REQUESTED })

export const changeCategory = () => ({ type: CHANGE_CATEOGRY })