export const GET_PRODUCT_REQUESTED = 'GET_PRODUCTS_REQUESTED'
export const GET_PRODUCT_SUCCEEDED = 'GET_PRODUCT_SUCCEEDED'
export const GET_PRODUCT_FAILED = 'GET_PRODUCT_FAILED'

export const getProductInformation = (productId) => {
    return { type: GET_PRODUCT_REQUESTED, productId }
}