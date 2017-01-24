export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';

export const searchProducts = () => {
    return { type: SEARCH_PRODUCTS }
}

export const changeKeyword = (keyword) => {
    return { type: CHANGE_KEYWORD, keyword }
}