import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./nav.module.css";
const Nav = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.mob}>
        <h1 style={{color:'var(--sec-color)'}}>Hossam Elsheikh</h1>
        <i className="fa-solid fa-bars" onClick={props.onclick}></i>
      </div>
      <ul>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>PROJECTS</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>ABOUT</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
