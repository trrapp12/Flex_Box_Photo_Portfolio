import { React } from 'react'
import { Image } from './components/image'
import { dataObject } from './js/data'


const App = (props) => {
  console.log(dataObject)
  const imagesData = dataObject.map((value) => {
    
    for (const image of value) {
      console.log(image)
      // return (
      //   <Image 
      //     images = {value[i].images}
      //   />
      // )
    }


  });
  return (
    // { imagesData }
    <div>dummy</div>
  )
}

export default App