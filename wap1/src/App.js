import logo from './logo.svg'
import './App.css'
import Stack from 'react-bootstrap/Stack'
import ImageUpload from './ImageUpload'
import ColorPalette from './ColorPalette'
import SwatchOptions from './SwatchOptions'
import { useState } from 'react'
function App() {
  
  const [imageUrl,setImageUpload] = useState(null)
  const [HexCode, setHexCode] = useState(null)
//handler that take image from ImageUpload component and makes it avail to ColorPalette through "image" StateHook
  const handleImageUpload = (imageData) => {
    const imageUrl = URL.createObjectURL(imageData);
    console.log("the value of imageURL from inside handleImageUpload App.js ")
    console.log(imageData)
    setImageUpload(imageUrl)
  }

  const handleHexCode = (hexcode) => {
    console.log("the value of HexCode from inside App.js (handlehexcode)")
    console.log(hexcode)
    setHexCode(hexcode)
  }

  

  return (
    <div className='App'>
    <Stack  gap={3} style={{ alignItems: 'center' }}>
   <ImageUpload onImageUpload={handleImageUpload}/>
   <ColorPalette imageSource={imageUrl} hexCde={handleHexCode} />
   <SwatchOptions SelectedHex={HexCode} />
  </Stack>
  </div>
  );
}

export default App
