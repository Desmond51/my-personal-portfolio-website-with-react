import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          G.H.S Bokova, Buea
          </h3>
          <p>Secondary School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Baptist High School, Great Suppo, Buea. 
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
           High School
          </h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
         Saint Monica University Institute
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Buea
          </h4>
          <p> Barchelor's degree in Computer/Electrical Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020-3 months"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
         Google
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Mountain View, California
          </h4>
          <p> Digital marketing certification</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Currently a Software Developer Trainee at  <a href="https://iknite.space">Iknite Space</a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Iknite Space, Suppo, Buea
          </h4>
          <p>
            At iknite space, you can kick start your carrier in software development and graphic design from zero to hero. Iknite space is working me through a carrier path i have always dreamed of not just by focusing on my carrier path but also, by encouraging team work and good character. I can feel progress in my life. I'm proud of iknite space.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
