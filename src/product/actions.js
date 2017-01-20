const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export const searchProducts = (keyword) => {
    return { type: SEARCH_PRODUCTS, keyword}
}