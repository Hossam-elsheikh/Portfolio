import React, { useEffect, useState } from "react";
import BgContainer from "../UI/bgCont/BgContainer";
import classes from "../project/project.module.css";
import img1 from "../../assets/noter.png";
import khaled from "../../assets/khaled.jpeg";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Project = () => {
  const {id} = useParams()
  const project= useSelector((data)=> data.projects.projects.find((p)=> p.id === +id))
  console.log(project);
  return (
    <BgContainer>
      <div className={classes.projContainer}>
      <Link className={classes.back} to='/projects'>Back To Projects</Link>
        <div className={classes.title}>
        <h1>{project.title}</h1>
        <div className={classes.btns}>
          <Link to={project.gitLink} target="_blank">Git Repositry</Link>
          <Link to={project.livePreview} target="_blank">Live Preview</Link>
        </div>
        </div>
        <div className={classes.details}>
          <div className={classes.left}>
            <p className={classes.mainDes}>
              {project.description}
            </p>
            <ul>
              <p>Key Features</p>
              {project.keyFeatures.map((keyFeature,index) =><li key={index}>{keyFeature}</li>)}
            </ul>
            {project.specs.map((spec,index)=> <div key={index} className={classes.feature}>
              <p style={{marginBottom:'1rem'}}>
                {spec.description}
              </p>
              <img src={spec.gif} />
            </div>)}
          </div>
          <div className={classes.right}>
            <div className={classes.section}>
              <h3>Tools</h3>
              {project.tools.map((tool,index) =>{
                return tool.faIcon ? <div key={index} className={classes.tool}>
                <i className={`fa-brands ${tool.icon}`}></i>
                <p>{tool.title}</p>
              </div> : <div key={index} className={classes.tool}>
                <img className={classes.imgicon} src={tool.icon}/>
                <p>{tool.title}</p>
              </div>
              })} 
              
            </div>
            <hr />
             <div className={classes.section}>
              {project.partners && <h3>Partners</h3>}
              <div className={classes.partners}>
                {project.partners && project.partners.map((partner,index)=>{
                  return <div key={index} className={classes.partner}>
                  <img src={partner.pic} />
                  <Link
                    to={partner.linkedin}
                    target="_blank"
                  >
                    {partner.name}
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </div>
                })}
                {project.partners && <hr />}
                <h5>Date Created</h5>
                <p style={{fontSize:'.7rem'}}>{project.dateCreated}</p>
                <h5>Date Updated</h5>
                <p style={{fontSize:'.7rem'}}>{project.dateUpdated}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgContainer>
  );
};

export default Project;
