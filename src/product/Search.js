import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as act from './actions';
import { Icon } from 'antd';

const searchStyle = {
    height: "37px",
    border: "1px solid #F24040",
    width: "50%",
    padding: "0 15px"
}
const iconSpanStyle = {
    padding: "11px",
    backgroundColor: "#F24040",
    cursor: "pointer",
}

const iconStyle = {
    fontSize: "17px",
    color: "white",
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchKeyword: event.target.value });
  }

  handleSubmit(event) {
    // API CALL TO this.state.searchKeyword 
    console.log(this.state.searchKeyword);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" style={searchStyle} value={this.state.searchKeyword} onChange={this.handleChange} />
        <span style={iconSpanStyle} onClick={this.handleSubmit}>
          <Icon type="search" style={iconStyle} />
        </span>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchKeyword: state.searchKeyword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (keyword) => {
      dispatch(act.searchProducts(keyword))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer;
