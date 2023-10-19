import  { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import classes from "./main.module.css";
import MobNav from "../mobnav/MobNav";
import Mail from "../mailme/Mail";
const Main = () => {
  const [toggleNav, toggle] = useState(false);
  const toggleMobNav = () => {
    toggle(!toggleNav);
  };
  return (
    <div className={classes.main}>
      {toggleNav ? (
        <MobNav onclick={toggleMobNav} />
      ) : (
        <div className={classes.content}>
          <Nav onclick={toggleMobNav}></Nav>
          <Outlet></Outlet>
        </div>
      )}
      {!toggleNav && <Mail></Mail>}
    </div>
  );
};

export default Main;
