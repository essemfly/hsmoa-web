import React, { PropTypes, Component } from 'react'

const searchListHandleStyle = {
  backgroundColor: '#f7f7f7',
  height: '50px',
  width: '790px',
  fontSize: '14px',
  marginBottom: '30px',
  marginLeft: '20px',
  display: 'table',
}

const filterBtnStyle = {
  marginLeft: '10px',
  padding: '7px 13px',
  borderRadius: '3px',
  backgroundColor: '#32be9f',
  color: 'white',
}

class SearchHeaderFilterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: '',
      max: '',
    }

    this.handleMaxChange = this.handleMaxChange.bind(this)
    this.handleMinChange = this.handleMinChange.bind(this)
    this.onSubmitPriceRange = this.onSubmitPriceRange.bind(this)
  }

  handleMaxChange(evt) {
    this.setState({ max: evt.target.value })
  }

  handleMinChange(evt) {
    this.setState({ min: evt.target.value })
  }

  onSubmitPriceRange() {
    let newFilter = {
      ...this.props.filter,
      priceRange: {
        start: this.state.min,
        end: this.state.max,
      }
    }
    this.props.onClickPriceRange(newFilter)
  }

  render() {
    return (
      <div>
        <div style={searchListHandleStyle}>
          <div style={{ textAlign: 'initial', paddingLeft: '20px', display: 'table-cell', lineHeight: '50px', }}>
            <span className={this.props.filter.order === '' ? 'order-active' : ''} style={{ paddingRight: '20px', cursor: 'pointer', }} onClick={() => this.props.onClickListOrder(this.props.filter, '인기순')}>인기순</span>
            <span className={this.props.filter.order === 'price asc' ? 'order-active' : ''} style={{ paddingRight: '20px', cursor: 'pointer', }} onClick={() => this.props.onClickListOrder(this.props.filter, '낮은가격순')}>낮은가격순</span>
            <span className={this.props.filter.order === 'price desc' ? 'order-active' : ''} style={{ paddingRight: '20px', cursor: 'pointer', }} onClick={() => this.props.onClickListOrder(this.props.filter, '높은가격순')}>높은가격순</span>
          </div>
          <div style={{ lineHeight: '30px', textAlign: 'right', marginRight: '20px', }}>
            <input type="text" value={this.state.min} onChange={this.handleMinChange}/>
            <span> ~ </span>
            <input type="text" value={this.state.max} onChange={this.handleMaxChange}/>
            <span style={filterBtnStyle} onClick={this.onSubmitPriceRange}>적용</span>
          </div>
        </div>
      </div>
    )
  }

}

SearchHeaderFilterComponent.propTypes = {
  filter: PropTypes.object,
  onClickListOrder: PropTypes.func,
  onClickPriceRange: PropTypes.func,
}

export default SearchHeaderFilterComponent
