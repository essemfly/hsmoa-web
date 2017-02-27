import React, { PropTypes, Component } from 'react'
import search_icon from './images/search_icon.png'

const formStyle = {
    textAlign: "right",
    margin: '0',
    verticalAlign: 'top',
}

const searchStyle = {
    height: "40px",
    border: "1px solid #F24040",
    width: "80%",
    padding: "0 15px",
    fontSize: "16px",
    color:"black"
}

const iconDivStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
}

const iconStyle = {
    height: '40px',
    cursor: 'pointer',
}

class SearchComponent extends Component {

    constructor(props) {
        super(props)
        this.handleClickEvent = this.handleClickEvent.bind(this)
    }

    handleClickEvent (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.props.onSearchClick()
    }

    render() {
        return (
            <div>
              <div style={{height:'5px'}}></div>
              <form onSubmit={this.handleClickEvent} style={formStyle}>
                <input type="text" style={searchStyle}  placeholder={'검색'} onChange={(evt) => this.props.onChangeKeyword(evt.target.value)}  />
                <div style={iconDivStyle}>
                    <img style={iconStyle} src={search_icon} alt='searchIcon' onClick={this.props.onSearchClick}/>
                </div>
              </form>
            </div>
        )
    }
}

SearchComponent.PropTypes = {
  onSearchClick: PropTypes.func.isRequired,
  onChangeKeyword: PropTypes.func.isRequired,
}

export default SearchComponent;
