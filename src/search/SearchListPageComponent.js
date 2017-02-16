import React, { PropTypes } from 'react'
import prev from './images/arrow-prev@2x.png'
import next from './images/arrow-next@2x.png'

const pageStyle = {
    lineHeight: '30px',
    textAlgin: 'center',
    display: 'inline-block',
    width: '30px',
    color: '#8d8d8d',
    marginRight: '10px',
    cursor: 'pointer',
}

const currentPageStyle = {
    lineHeight: '30px',
    borderRadius: '17px',
    textAlgin: 'center',
    display: 'inline-block',
    width: '30px',
    height: '30px',
    backgroundColor: '#40d0b0',
    color: 'white',
    marginRight: '10px',
    cursor: 'pointer',
}

const arrowStyle = {
    height: '12px',
    marginRight: '20px',
    cursor:'pointer'
}

const SearchListPageComponent = ({filter, totalProductsCount, onClickPage}) => {
    const lastPage = Math.ceil(totalProductsCount / 30)
    let start = Math.max(filter.page - 4, 1)
    let end = Math.min(lastPage, filter.page + 5)

    let pagesHtml = []
    for (let i = start; i < end; i++) {
        if (filter.page === i) {
            pagesHtml.push(<div key={i} style={currentPageStyle} onClick={() => onClickPage(filter, i)}> {i} </div>)
        } else {
            pagesHtml.push(<div key={i} style={pageStyle} onClick={() => onClickPage(filter, i)}> {i} </div>)
        }
    }

    return (
        <div style={{ height: '17px', fontSize: '17px', }}>
            <img src={prev} style={arrowStyle} onClick={() => onClickPage(filter, start)} alt='start_arrww' />
            {pagesHtml}
            <img src={next} style={arrowStyle} onClick={() => onClickPage(filter, end)} alt='start_arrww' />
        </div>
    )
}

SearchListPageComponent.propTypes = {
    totalProductsCount: PropTypes.number,
    filter: PropTypes.object,
    onClickPage: PropTypes.func,
}

export default SearchListPageComponent