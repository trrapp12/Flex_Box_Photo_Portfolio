import React from 'react'
import Image from './image'
import dataObject from './js/data'


const App = (props) => {
  console.log(dataObject)
  const imagesData = dataObject.map((value) => {
    
    for (let i = 0; i < value.length; i++) {
      return (
        <Image 
          images = {value[i].images}
        />
      )
    }


  });
  return (
    { imagesData }
  )
}

export default App