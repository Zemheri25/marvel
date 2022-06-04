import React from 'react'
import "./Header.css";
import Marvel from "../../images/Marvel_Logo.svg.png"

const header = () => {
  return (
    <div className='Headermain'>
      <img src={Marvel} alt="marvelimage" className='marvelimg'/>
    </div>
  )
}

export default header