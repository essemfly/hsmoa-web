export const SEARCH_KEWORD_REQUESTED = 'SEARCH_KEWORD_REQUESTED';
export const SEARCH_KEWORD_SUCCEEDED = 'SEARCH_KEWORD_SUCCEEDED';
export const SEARCH_KEWORD_FAILED = 'SEARCH_KEWORD_FAILED';

export const searchKeywordRequested = (category) => ({ type: SEARCH_KEWORD_REQUESTED, category: category })