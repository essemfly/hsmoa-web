import React, { PropTypes, Component } from 'react'

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.props.getProductInfo(this.props.productId)

    this.createDetailMarkup = this.createDetailMarkup.bind(this);
  }
    
  createDetailMarkup(rawHtml) {
    return {__html: rawHtml}
  }

  render() {
    return (
    <div>
        {this.props.product.name}
        <div style={{padding: '0 15px', textAlign: 'left',}} dangerouslySetInnerHTML={this.createDetailMarkup(this.props.product.detail_html)} />
    </div>
    )
  }
} 

ProductComponent.propTypes = {
  product: PropTypes.object,
  getProductInfo: PropTypes.func,
}

export default ProductComponent