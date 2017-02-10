import React, { PropTypes } from 'react'
import BeforeLiveListComponent from './BeforeLiveListComponent'
import LiveListComponent from './LiveListComponent'
import AfterLiveListComponent from './AfterLiveListComponent'

const ScheduleListComponent = ({ schedules }) => {
  if (!schedules.hasOwnProperty('live')) {
    return <div></div>
  }

  return (
    <div>
      <BeforeLiveListComponent schedules={schedules.before_live} live={schedules.live.length > 0}/>
      <LiveListComponent schedules={schedules.live.length > 0 ? schedules.live[0].data : []} />
      <AfterLiveListComponent schedules={schedules.after_live} />
    </div>
  );
}

ScheduleListComponent.propTypes = {
  schedules: PropTypes.object,
}

export default ScheduleListComponent;

