import { GET_PRODUCT_FAILED, GET_PRODUCT_SUCCEEDED } from './actions'

const initialState = {
    product : {}
}

export const productReducer = (state= initialState, action) => {
    switch(action.type) {
        case GET_PRODUCT_SUCCEEDED:
            return { ...state, product: action.data}
        case GET_PRODUCT_FAILED:
            return { ...state }
        default:
            return { ...state }
    }
}