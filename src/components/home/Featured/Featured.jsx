import React from 'react'
import Container from '../../UI/Container/Container'
import classes from './featured.module.css'
import { Link } from 'react-router-dom'
import SmallContainer from '../../UI/SmallContainer/SmallContainer'
import { useSelector } from 'react-redux'
const Featured = () => {
  const featuredProjects = useSelector((data)=> data.projects.projects.filter((project)=> project.featured))
  return (
    <Container bg='var(--main-color)' clr='var(--sec-color)'>
      <h2>Featured Projects</h2>
      <p>Click to view Details</p>
      <SmallContainer bg='#70c2eb'>
      {featuredProjects.map((project,index)=><div  key={index} className={classes.proj}>
       
        <Link to={`/projects/${project.id}`}><img src={project.specs[0].gif}/></Link>
      </div>)}
      <br/>
      <Link to='/projects' className={classes.view}>View all Projects</Link>
      </SmallContainer>
    </Container>
  )
}

export default Featured