import "./timeline.css";
import { motion } from "framer-motion";

function Item({ id }) {


  const content = [{ 'title': "Abstract Submission Starts", 'date': "23rd August 2023"},
  { 'title': "Abstract Submission Ends", 'date': "30th September 2023" },
  { 'title': "Notification of Acceptance of Abstract", 'date': "10th October 2023" },
  { 'title': "Deadline for Registration", 'date': "20th October 2023" },
  { 'title': "NSRC Official Event starts", 'date': "3rd November 2023" },
  { 'title': "Event End Date", 'date': "4rd November 2023" }];
  
  return (
      <motion.div className="top" initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} >
        <div className="time-content">
          <p className="time-heading">{content[id]['date']}</p>
          <p className= {"time-event"}>{content[id]['title']}</p>
        </div>
      </motion.div>
  );
}

export default function TimeLine() {
  return (
    <div className="time-main" id="time">
      <h1 className="title">TimeLine</h1>
      <div className="items">
        <Item id={0}/>
        <Item id={1}/>
        <Item id={2}/>
        <Item id={3}/>
        <Item id={4}/>
        <Item id={5}/>
      </div>
    </div>
  );
}
