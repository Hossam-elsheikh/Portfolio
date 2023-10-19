import React from 'react'
import classes from './mobnav.module.css'
import { NavLink } from 'react-router-dom'
const MobNav = (props) => {
  return (
    <div className={classes.side}>
        <nav>
      <ul>
        <NavLink
          to=""
          onClick={props.onclick}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to="/projects"
          onClick={props.onclick}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>PROJECTS</li>
        </NavLink>
        <NavLink
          to="/about"
          onClick={props.onclick}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>ABOUT</li>
        </NavLink>
      </ul>
    </nav>
    </div>
  )
}

export default MobNav