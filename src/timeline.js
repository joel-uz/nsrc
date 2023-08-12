import "./timeline.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";


function Item({id}) {

  const content = [{ 'title': "Abstract Submission Starts", 'date': "23rd August 2023" },
  { 'title': "Abstact Submission Ends", 'date': "30th September 2023" },
  { 'title': "Notification of Acceptance of Abstract", 'date': "10th October 2023" },
  { 'title': "Deadline for Regsitration", 'date': "20th October 2023" },
  { 'title': "NSRC Official Event starts", 'date': "3rd November 2023" },
  { 'title': "Event End Date", 'date': "4rd November 2023" }]

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <section>
      <div ref={ref} className="top">
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        <div className="time-content">
          <p className="time-heading">{content[id]['date']}</p>
          <p className="time-event">{content[id]['title']}</p>
        </div>
      </div>
    </section>
  );
}

export default function TimeLine() {
  return (
    <div className="time-main">
      <h1 className="title">TimeLine</h1>
      <div>
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
