import React from 'react'

const Image = (props) => {

  return (
   <li className="photo-container">
      <img src={`./assets/resized/${props.images}`}></img>
   </li>
  )
}

export default Image