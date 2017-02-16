import React, { PropTypes, Component } from 'react'
import GeneralProductComponent from './GeneralProductComponent'
import LiveProductComponent from './LiveProductComponent'

const baseStyle = {
  width: '100%',
  maxWidth: '760px',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'table',
}

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.props.getProductInfo(this.props.productId)

    this.createDetailMarkup = this.createDetailMarkup.bind(this);
  }
    
  createDetailMarkup(rawHtml) {
    return { __html: rawHtml }
  }

  render() {
    return (
      <div style={baseStyle}>
        {
          this.props.product.live_status === 1 ?
          <LiveProductComponent product={this.props.product} /> : <GeneralProductComponent product={this.props.product} />
        }    
        <div style={{ textAlign: 'initial', fontSize: '14px'}} dangerouslySetInnerHTML={this.createDetailMarkup(this.props.product ? this.props.product.detail_html : '')} />
      </div>
    )
  }
} 

ProductComponent.propTypes = {
  product: PropTypes.object,
  getProductInfo: PropTypes.func,
}

export default ProductComponent