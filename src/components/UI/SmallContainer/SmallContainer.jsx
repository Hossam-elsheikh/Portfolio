import React from 'react'
import classes from './small.module.css'
const SmallContainer = (props) => {
  return (
    <div className={classes.sm}>{props.children}</div>
  )
}

export default SmallContainer