import { connect } from 'react-redux'
import ProductComponent from './ProductComponent'
import { getProductInformation } from './actions'

const mapStateToProps = (state) => {
  return {
    productId: state.routing.locationBeforeTransitions.pathname.split('/')[2],
    product: state.productReducer.product,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductInfo: (productId) => {
      dispatch(getProductInformation(productId))
    }
  }
}

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductComponent)


export default ProductContainer;
