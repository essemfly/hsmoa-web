const initialState = {
    searchKeyword: '',
    productFilter: {
        source: 'ALL',
        order: 'POPULAR',
    },
    products: [],
    relatedProducts: [],
}

export const productReducer = (state= initialState, action) => state;