import BgContainer from "../UI/bgCont/BgContainer";
import classes from "./about.module.css";
import { useSelector } from "react-redux";
const About = () => {
  const details = useSelector((data) => data.details.details);
  return (
    <BgContainer>
      <div className={classes.aboutContainer}>
        <div className={classes.brief}>
          <h2>Background</h2>
          <h3>Hossam Mohamed Abdelrahim</h3>
          <h5>{details.currentJobTitle}</h5>
          <p> Brief:</p>
          <p>{details.brief}</p>
        </div>
        <hr />
        <div className={classes.courses}>
          <h2>Courses</h2>
          {details.courses &&
            details.courses.map((course, index) => (
              <div className={classes.course} key={index}>
                <h4 className={classes.title}>{course.title}</h4>
                <p>{course.description}</p>
                <p>Claimed By : {course.organization} at {course.date} <a href={course.link} target="_blank" rel="noreferrer"> Check Course Certificate</a></p>
                <p className={classes.topics}>Topics:</p>
                <ul>
                  {course.topics.map((topic, index) => (
                    <li key={index}>* {topic}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </BgContainer>
  );
};

export default About;
