import React from 'react'
import classes from './generic.module.css'

const Generic = () => {
  return (
    <div className={classes.GenericMainDiv}>
      <div className={classes.gen}>
        Generic</div>
     <button className={classes.getButton}>Get Our Latest Album</button>
      <div> music logo </div>
    </div>
  )
}

export default Generic
