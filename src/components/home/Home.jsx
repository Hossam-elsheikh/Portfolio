import React from 'react'
import Container from '../UI/Container/Container'
import Details from './Details/Details'
import Featured from './Featured/Featured'
import classes from './home.module.css'
import Skills from './Skills/Skills'
import BgContainer from '../UI/bgCont/BgContainer'
const Home = () => {
  return (
    <BgContainer>
    <div  className={classes.home}>
      <Details></Details>
      <Featured></Featured>
      <Skills></Skills>
    </div>
    </BgContainer>
  )
}

export default Home