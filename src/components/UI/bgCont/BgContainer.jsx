import React from 'react'
import classes from './bg.module.css'
const BgContainer = (props) => {
  return (
    <div className={classes.cont}>
        <div className={classes.bg}></div>
{props.children}
    </div>
  )
}

export default BgContainer