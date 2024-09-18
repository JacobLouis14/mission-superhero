import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimelineComp = () => {
  return (
    <Timeline position="alternate" className="mt-5">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "blue" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Reciving the greivance</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "yellow" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Studyng the problem</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "blueviolet" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Finding the best solution </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "green" }} />
        </TimelineSeparator>
        <TimelineContent>Resolving</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineComp;
