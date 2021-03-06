import React, { PropTypes, Component } from 'react'
import SearchFilterComponent from './SearchFilterComponent'
import SearchListComponent from './SearchListComponent'
import SearchHeaderFilterComponent from './SearchHeaderFilterComponent'
import SearchListPageComponent from './SearchListPageComponent'
import { formatMoney } from '../common'

const baseStyle = {
  width: '100%',
  maxWidth: '980px',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'table',
}
const leftNavStyle = {
  width: '160px',
  height: '500px',
  marginRight: '30px',
  display: 'table-cell',
  textAlign: 'initial',
}

const productListStyle = {
  display: 'table-cell',
  paddingLeft: '30px',
  paddingBottom: '50px',
}

const resultInfoStyle = {
  fontWeight: 'bold',
  fontSize: '19px',
  lineHeight: '23px',
  textAlign: 'initial',
  margin: '20px',
}

const relatedTextStyle = {
  fontSize: '12px',
  color: '#666666',
  paddingRight: '26px',
  display:'inline-block'
}

const relatedTextDivStyle = {
  margin: '0 0 30px 20px',
  height: '15px',
  overflow: 'hidden',
  textAlign: 'initial',
  cursor: 'pointer',
}

class SearchComponent extends Component {
  constructor(props) {
    super(props)
    if (this.props.products.length < 1 && this.props.params.keyword.length > 0) {
      this.props.getSearchResult(this.props.params.keyword)
    }
  }

  render() {
    return (
      <div style={baseStyle}>
        <div style={leftNavStyle}>
          <SearchFilterComponent
            filter={this.props.filter}
            categories={this.props.categories}
            channels={this.props.channels}
            onClickLiveStatus={this.props.onClickLiveStatus}
            onClickCategory={this.props.onClickCategory}
            onClickChannel={this.props.onClickChannel}
          />
        </div>
        <div style={productListStyle}>
          <div style={resultInfoStyle}>
            {`"${this.props.filter.keyword}"에 대한 ${formatMoney(this.props.totalProductsCount)}개의 상품이 있습니다.`}
          </div>
          {
            this.props.relatedTexts.count > 0 ?
              <div style={relatedTextDivStyle}>
                {
                  this.props.relatedTexts.data.map((text, index) =>
                    <span key={index} style={relatedTextStyle} onClick={() => this.props.getSearchResult(text.query)}>{`#${text.query}`}</span>
                  )
                }
              </div> : ''
          }
          <SearchHeaderFilterComponent
            filter={this.props.filter}
            onClickListOrder={this.props.onClickListOrder}
            onClickPriceRange={this.props.onClickPriceRange}
          />
          <SearchListComponent products={this.props.products} />
          { this.props.products.length >= 30 ?
            <SearchListPageComponent filter={this.props.filter} totalProductsCount={this.props.totalProductsCount} onClickPage={this.props.onClickPage} />:<div></div>
          }
        </div>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  searchKeyword: PropTypes.string,
  getSearchResult: PropTypes.func,
  categories: PropTypes.array,
  channels: PropTypes.array,
  totalProductsCount: PropTypes.number,
  filter: PropTypes.object,
  relatedTexts: PropTypes.object,
  onClickLiveStatus: PropTypes.func,
  onClickCategory: PropTypes.func,
  onClickChannel: PropTypes.func,
  onClickListOrder: PropTypes.func,
  onClickPriceRange: PropTypes.func,
  onClickPage: PropTypes.func,
}

export default SearchComponent;
