import React from 'react'
import classes from './skills.module.css'
import Container from '../../UI/Container/Container'
import 'react-tooltip/dist/react-tooltip.css'
import SmallContainer from '../../UI/SmallContainer/SmallContainer'
import { Tooltip } from 'react-tooltip'
import { useSelector } from 'react-redux'

const Skills = () => {
  const details = useSelector((data) =>data.details.details)
  return (
    <Container pad='3rem' bg='var(--sec-color)'>
      <h2 style={{color:'var(--third-color)'}}>My Skills' Bag</h2>
      <div className={classes.skills}>
        {details.skills && details.skills.have.map((skill)=> <>
      {skill.icon.length < 30 ?
       <i data-tooltip-id={skill.title} data-tooltip-content={skill.title} className={skill.icon}></i>
      : <img className={classes.imgIcon} src={skill.icon} data-tooltip-id={skill.title} data-tooltip-content={skill.title}/>}
      <Tooltip id={skill.title}/>
        </>)}
   
      </div>
      <h2 style={{color:'var(--third-color)'}}>Currently Learning</h2>
      <div className={classes.skills}>
      {details.skills && details.skills.learning.map((skill)=> <>
      {skill.icon.length < 30 ?
       <i data-tooltip-id={skill.title} data-tooltip-content={skill.title} className={skill.icon}></i>
      : <img className={classes.imgIcon} src={skill.icon} data-tooltip-id={skill.title} data-tooltip-content={skill.title}/>}
      <Tooltip id={skill.title}/>
        </>)}

      </div>
    </Container>
  )
}

export default Skills