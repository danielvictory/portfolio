import React from 'react'
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import SettingsBackupRestoreIcon from "@material-ui/icons/Work";

const Timeline = () => {
  return (
    <div style={{background:"#05668D"}}>
        <p className="holder" id="timeline" style={{
            display:"block",
            position:"relative",
            visibility:"hidden", 
            top: "-50px" 
            }}></p>
        <h1 style={{textAlign:"center", color:"#02C39A", padding:"10px", margin:"0"}}>Timeline</h1>
        <VerticalTimeline lineColor="#02C39A">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023 Onward!"
                iconStyle={{ background: "#dfbe44", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    My Next Opportunity!
                </h3>
                <p>Call me, beep me, if you wanna reach me. Front End, Back End, Full Stack, DevOps - I'm hungry to learn.</p>
            </VerticalTimelineElement> 
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2023"
                iconStyle={{ background: "#02C39A", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    General Assembly
                </h3>
                <p>Software Engineering Immersive</p>
            </VerticalTimelineElement> 
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022-2023"
                iconStyle={{ background: "#dfbe44", color: "#fff" }}
                icon={<SettingsBackupRestoreIcon />}
                >                
                <h3 className="vertical-timeline-element-title">
                    Career Break
                </h3>
                <p>Recognized my interests lay in other directions than my previous career trajectory.  The past year has held multiple crosscountry roadtrips, incredible memories, hard decisions, and new education.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017-2022"
                iconStyle={{ background: "#dfbe44", color: "#fff" }}
                icon={<WorkIcon />}
                >                
                <h3 className="vertical-timeline-element-title">
                    Chevron
                </h3>
                <h6 className="vertical-timeline-element-title">
                    (Hydroprocessing Design and Licensing)
                </h6>
                <h4 className="vertical-timeline-element-title">
                    Technical Service Engineer
                </h4>
                <h4 className="vertical-timeline-element-title">
                    Hydroprocessing Design Engineer
                </h4>
                <p>Held offical and unoffical roles of increasing responsibility within the group including learning and then teaching an object oriented database program (COMOS) to my peers and  supervisors.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2013 - 2016"
                iconStyle={{ background: "#02C39A", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    The University of Texas at Austin
                </h3>
                <p>B.S. Chemical Engineering</p>
            </VerticalTimelineElement>            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2012 - 2013"
                iconStyle={{ background: "#dfbe44", color: "#fff" }}
                icon={<WorkIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    Summer Camp Counselor, Legal Aide, Waiter
                </h3>
                <p>Held multiple part time jobs while applying to transfer Universities.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2010 - 2012"
                iconStyle={{ background: "#02C39A", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    The University of Evansville
                </h3>
                <p>B.S. Theatre Performance (Transferred)</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Timeline