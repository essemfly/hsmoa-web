export const SEARCH_KEWORD_REQUESTED = 'SEARCH_KEWORD_REQUESTED';
export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';

export const searchProducts = () => {
    return { type: SEARCH_KEWORD_REQUESTED }
}

export const changeKeyword = (keyword) => {
    return { type: CHANGE_KEYWORD, keyword }
}