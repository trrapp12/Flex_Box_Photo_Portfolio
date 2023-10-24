import React from 'react'

export function Image(props){

  return (
   <li className="photo-container">
      <img src={`./assets/resized/${props.images}`} alt=""></img>
   </li>
  )
}
