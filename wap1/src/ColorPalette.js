import Card from 'react-bootstrap/Card'
import CardText from 'react-bootstrap/CardText'
import { usePalette } from 'color-thief-react'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function ColorPalette ({imageSource , hexCde}) {
  

  
  //console.log("this is the value of the imageSource prop inside the ColorPalette component")
  //console.log(imageSource)
  
  // Using the usePalette hook to get the color palette from the provided image source.
  // The `data` variable will contain an array of colors if available.
  const { data, loading, error } = usePalette(imageSource, 7, 'hex', { crossOrigin: 'anonymous' })

  if (loading) return <div style={{color:'#323234'}} >Loading color palette...</div>
  if (error) return <div style={{color:'#323234'}}>Error loading color palette!</div>

  const handleSwatchClick = (color) => {
    console.log(`You clicked on color: ${color}`)
   hexCde(color)
}
  return (
    <Card text = 'white' style={{ width: '40rem', height: '40rem', padding: '1rem' ,backgroundColor: '#363940' }}>
      <CardText>Color Palette</CardText>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height:'100%' }}>

       
        {data && data.map((color, index) => (
          <Button
           key={index} 
           style={{ 
            backgroundColor: color, 
            width: 'calc(100% / 7 - 10px)', 
            height: '25%',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px', // Spacing between buttons
            position: 'relative', // For absolute positioning of the hex value
            overflow: 'hidden', // Ensures the content does not spill out 
            
          }} 
          onClick={() => handleSwatchClick(color)}
          >
            <span style={{
                position: 'absolute', // Absolutely position the hex value
                bottom: '5px', // Position at the bottom of the button
                fontSize: '0.8rem', // Smaller font size for the hex value
            }}>
                {color}
            </span>
        </Button>
        ))}
      </div>
    </Card>
  )
}

export default ColorPalette