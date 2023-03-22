import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2017 - 2018"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>A.V.M.D Institute, Agra , Uttar Pradesh </h3>
        <p> 10th class </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2019 - 2020"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>A.V.M.D Institute, Agra , Uttar Pradesh </h3>
        <p> 12th class </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020 - 2024"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>Jaypee Institute of Information Technology</h3>
        <p>B.Tech , CSE</p>
       
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2022 - 2023"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
        <h3 className='vertical-timeline-element-title'>Subject Matter Expert - Chegg</h3>
        <p>B.Tech , CSE</p>
       
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  )
}

export default Experience
