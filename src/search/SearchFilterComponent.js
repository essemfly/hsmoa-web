import React, { PropTypes } from 'react'
import search_tab_1 from './images/search-tab-1@2x.png'
import search_tab_2 from './images/search-tab-2@2x.png'
import search_tab_3 from './images/search-tab-3@2x.png'
import search_tab_1_on from './images/search-tab-1-on@2x.png'
import search_tab_2_on from './images/search-tab-2-on@2x.png'
import search_tab_3_on from './images/search-tab-3-on@2x.png'

const filterNavStyle = {
  position: 'fixed',
  width: 'inherit',
}

const filterSectionStyle = {
  paddingBottom: '10px',
  borderBottom: 'solid 1px #dddddd',
}

const filterHeaderStyle = {
  fontSize: '15px',
  lineHeight: '19px',
  marginTop: '18px',
  marginBottom: '12px',
}

const checkboxStyle = {
  margin: '8px 0',
  fontSize: '13px',
  color: '#8d8d8d',
}

const categoryImageStyle = {
  height: '38px',
  cursor: 'pointer',
  verticalAlign: 'top',
}


const SearchFilterComponent = ({ categories, channels, filter, onClickCategory, onClickChannel, onClickLiveStatus }) => {
  if (categories.length < 1) {
    return <div></div>
  }

  return (
    <div style={filterNavStyle}>
      <div style={filterSectionStyle}>
        <div style={{paddingTop: '10px',}}>
          {
            filter.source === '' ?
            <img style={categoryImageStyle} src={search_tab_1_on} alt='tab1' onClick={() => onClickLiveStatus(filter)}/> :
            <img style={categoryImageStyle} src={search_tab_1} alt='tab1' onClick={() => onClickLiveStatus(filter)}/>
          }
          {
            filter.source === 'future' ?
            <img style={categoryImageStyle} src={search_tab_2_on} alt='tab2' onClick={() => onClickLiveStatus(filter, 'future')}/> :
            <img style={categoryImageStyle} src={search_tab_2} alt='tab2' onClick={() => onClickLiveStatus(filter, 'future')}/>
          }
          {
            filter.source === 'past' ?
            <img style={categoryImageStyle} src={search_tab_3_on} alt='tab3' onClick={() => onClickLiveStatus(filter, 'past')}/> :
            <img style={categoryImageStyle} src={search_tab_3} alt='tab3' onClick={() => onClickLiveStatus(filter, 'past')}/>
          }
        </div>
      </div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>카테고리</h4>
        <div>
          { categories.map((category, index) => (
              <div style={checkboxStyle} key={index}>
                <input id={`category${index}`} type="radio" name="category" onChange={(evt) => onClickCategory(filter, category, evt.target.checked)}/>
                <label htmlFor={`category${index}`}>{category.ncate3}</label>
              </div>
            ))
          }
        </div>
      </div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>쇼핑사</h4>
        <div>
          { channels.map((subchannel, index) => (
            <div style={{ marginTop:'10px', }}>
              <span style={{ fontSize:'11px', lineHeight:'11px' }} >{subchannel.name}</span>
                { subchannel['sub_genre2'].map((subchannel, index) => (
                  <div style={checkboxStyle} key={index}>
                     <input id={`channel${subchannel.genre2}`} type="checkbox" onChange={(evt) => onClickChannel(filter, subchannel, evt.target.checked)}/>
                     <label htmlFor={`channel${subchannel.genre2}`}></label>
                     <label htmlFor={`channel${subchannel.genre2}`}>{subchannel.name}</label>
                   </div>
                 ))
               }
             </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

SearchFilterComponent.propTypes = {
  filter: PropTypes.object,
  categories: PropTypes.array,
  channels: PropTypes.array,
  onClickCategory: PropTypes.func,
  onClickChannels: PropTypes.func,
  onClickDay: PropTypes.func,
}

export default SearchFilterComponent;
