import React from 'react'
import Image from './Image'
import data from './js/data'


function App (props) {
  const imagesData = data.map((value) => {
    return (
      <Image 
      images = {value.images}
    />
    )
  });
  return (
    {imagesData}
  )
}

export default App