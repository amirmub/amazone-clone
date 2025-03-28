import React from 'react'
import classes from "./HeaderBelow.module.css"
import { IoMenu } from "react-icons/io5";


function HeaderBelow() {
  return (
    <div className={classes.lists}>
      <ul>
        <p className={classes.menu}><IoMenu /></p>
        <li>All</li>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Registory</li>
        <li>Gift Cards</li>
        <li>Cell</li>
      </ul>
    </div>
  )
}

export default HeaderBelow
