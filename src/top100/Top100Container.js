import { connect } from 'react-redux'
import { fetchTop100ProductsRequested } from './actions'
import Top100Component from './Top100Component'

const mapStateToProps = (state) => {
  return {
    category: state.top100Reducer.category,
    products: state.top100Reducer.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchTop100ProductsRequested())
  return {
    onClickCategory: (category) => {
      dispatch(fetchTop100ProductsRequested(category))
    }
  }
}

const Top100Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Top100Component)


export default Top100Container;
