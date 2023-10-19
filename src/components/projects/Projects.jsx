import React from "react";
import BgContainer from "../UI/bgCont/BgContainer";
import classes from "./projects.module.css";
import { Link } from "react-router-dom";
import noter from '../../assets/noter.png'
import { useSelector } from "react-redux";
const Projects = () => {
  const projects = useSelector((data)=> data.projects.projects)
  return (
    <BgContainer>
      <div className={classes.projects}>
        <section className={classes.field}>
          {projects.map ((project,index)=> <div key={index} className={classes.section}>
            <div className={classes.obj}>
              <div className={classes.content}>
                <div className={classes.title}>
                  <h1>{project.title}</h1>
                </div>
                <p className={classes.type}>{project.type}</p>
                <p>
                 {project.description}
                </p>
                <div className={classes.date}>
                  <div>

                <p className={classes.date}>Date Created</p>
                <p className={classes.date}>{project.dateCreated}</p>
                  </div>
                  <div>
                <p className={classes.date}>last Updated</p>
                <p className={classes.date}>{project.dateUpdated}</p>

                  </div>
                </div>
                <div className={classes.tools}>
                  <p>Tools</p>
                  <div>
                    {project.tools.map((tool)=>{
                      return  tool.faIcon ? <i className={`fa-brands ${tool.icon}`}></i> : <img className={classes.imgicon} src={tool.icon} />
                    })}
             
                  </div>
                </div>
              </div>
            <div className={classes.right}>
              <Link to={`/projects/${project.id}`}>More Details</Link>
              <img src={project.specs[0].gif} />
            </div>
            </div>
           
          </div>)}
        </section>
      </div>
    </BgContainer>
  );
};

export default Projects;
