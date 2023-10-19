import React from "react";
import classes from "./container.module.css";
const Container = (props) => {
  return (
    <div
      className={classes.lg}
      style={{
        padding: props.pad,
        flexDirection: props.fd,
        marginTop: props.mt,
        justifyContent: props.just,
        backgroundColor: props.bg,
        width: props.width,
        color: props.clr,
        height:props.height
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
