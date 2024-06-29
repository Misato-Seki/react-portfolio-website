import { timelineElements } from "./AboutMeElements";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../assets/img/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/img/school.svg';
import '../css/Default.css'
import '../css/AboutMe.css'

function AboutMe() {
    return (
        <div className="about" id="about"> 
            <h1>About Me</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === 'work';
                    return (

                        <VerticalTimelineElement
                            // className="vertical-timeline-element--work"
                            contentStyle={{ background: '#DDDFD4', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #DDDFD4' }}
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={{ background: '#7D8880', color: '#fff' }}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{element.place}</h4>
                            <p>{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )

}

export { AboutMe };