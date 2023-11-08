import Card from 'react-bootstrap/Card'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button';
import chroma from 'chroma-js'
import Color from 'color-thief-react'
import React, { useState } from 'react'

function SwatchOptions ({SelectedHex, SelectedLevel}) {

  const [closestColors, setClosestColors] = useState([])


   const ColorData = {
        "10": [
          { "name": "Platinum", "code": "010T", "color": "#a9a6a7" },
          { "name": "Marble", "code": "010NA", "color": "#edb17e" },
          { "name": "Ivory Pearl", "code": "010P", "color": "#b1acb9" },
          { "name": "Delicate Natural", "code": "010N", "color": "#deb989" },
          { "name": "Misty Beige", "code": "010AG", "color": "#c5a270" },
          { "name": "Caramel Cloud", "code": "010NB", "color": "#e8b489" },
          { "name": "Baby", "code": "010VG", "color": "#f7c8a9" },
          { "name": "Tahitian Sand", "code": "010GI", "color": "#edb17e" },
          { "name": "Lavender Ice", "code": "010VV", "color": "#d7b4cc" }
        ],
        "9": [
          { "name": "Chrome", "code": "09T", "color": "#bbbcc0" },
          { "name": "Sterling", "code": "09B", "color": "#c4c7d7" },
          { "name": "Mist", "code": "09NA", "color": "#ad8b6a" },
          { "name": "Opal Glow", "code": "09P", "color": "#a6a1ac" },
          { "name": "Sand Dunes", "code": "09M", "color": "#b79a7b" },
          { "name": "Cafe au Lait", "code": "09N", "color": "#c39f6f" },
          { "name": "Glossy Greige", "code": "09AG", "color": "#bf996c" },
          { "name": "Irish Creme", "code": "09NB", "color": "#d09360" },
          { "name": "Iridescence", "code": "09VG", "color": "#df9a7d" },
          { "name": "Cream Soda", "code": "09NW", "color": "#dba97d" },
          { "name": "Hamptons", "code": "09GI", "color": "#d69b6e" },
          { "name": "Butter Cream", "code": "09GB", "color": "#de9c50" },
          { "name": "Vanilla Creme", "code": "09G", "color": "#d3a15c" },
          { "name": "Papaya", "code": "09AA", "color": "#ee7b4b" },
          { "name": "Blush", "code": "09RB", "color": "#d26327" },
          { "name": "Platinum Ice", "code": "09V", "color": "#bda5a2" },
          { "name": "Rose", "code": "09VRO", "color": "#e3968c" }
        ],
        "8": [
          { "name": "Silver", "code": "08T", "color": "#b2b5bf" },
          { "name": "Ivy", "code": "08GN", "color": "#9c864a" },
          { "name": "Violet Frost", "code": "08VB", "color": "#bda4ba" },
          { "name": "Volcanic", "code": "08NA", "color": "#c9aa81" },
          { "name": "Mojave", "code": "08N", "color": "#9b7440" },
          { "name": "Gilded Taupe", "code": "08VG", "color": "#bc7353" },
          { "name": "St. Barths", "code": "08GI", "color": "#be844f" },
          { "name": "Gold Dip", "code": "08GG", "color": "#c99329" },
          { "name": "Golden Apricot", "code": "08WG", "color": "#c57722" },
          { "name": "Cayenne", "code": "08C", "color": "#ce6a1c" },
          { "name": "Sunrise", "code": "08CR", "color": "#d85429" },
          { "name": "Rose Quartz", "code": "08VRO", "color": "#b9695f" },
          { "name": "Iridescent Quartz", "code": "08V", "color": "#a27971" }
        ],
        "7": [
          { "name": "Steel", "code": "07T", "color": "#9ca0af" }, // OR #a3acb9 (provided two options, you might need to select one)
          { "name": "Violet Star", "code": "07VB", "color": "#a493ac" },
          { "name": "Pewter", "code": "07NA", "color": "#c3a378" },
          { "name": "Mother of Pearl", "code": "07P", "color": "#ab9ba4" },
          { "name": "Drifwood", "code": "07M", "color": "#bd9565" },
          { "name": "Mirage", "code": "07N", "color": "#c5a36f" },
          { "name": "Smokey Beige", "code": "07AG", "color": "#9e7043" },
          { "name": "Chestnut", "code": "07NB", "color": "#a8723a" },
          { "name": "Milk Tea", "code": "07NW", "color": "#a8732b" },
          { "name": "Butterscotch", "code": "07GB", "color": "#825014" },
          { "name": "Saffron", "code": "07G", "color": "#996114" },
          { "name": "Curry", "code": "07C", "color": "#bd5a11" },
          { "name": "SpiceStone", "code": "07CB", "color": "#ba5a1d" },
          { "name": "Urban Fever", "code": "07CC", "color": "#db570d" },
          { "name": "Flame", "code": "07RR", "color": "#d04338" },
          { "name": "Crushed Amethyst", "code": "07V", "color": "#795d5a" }
        ],
        "6": [
          { "name": "Iron", "code": "06T", "color": "#7f7c87" },
          { "name": "Moss", "code": "06GN", "color": "#8a855c" },
          { "name": "Brown Smoke", "code": "06ABn", "color": "#896543" },
          { "name": "Violet Lagoon", "code": "06VB", "color": "#887085" },
          { "name": "Granite", "code": "06NA", "color": "#946c41" },
          { "name": "Moroccan Sand", "code": "06N", "color": "#714627" },
          { "name": "Brandy", "code": "06NB", "color": "#824d36" },
          { "name": "Tenerife", "code": "06GI", "color": "#926146" },
          { "name": "Toffee", "code": "06GB", "color": "#a67750" },
          { "name": "St. Tropez", "code": "06G", "color": "#88572b" },
          { "name": "Midas Touch", "code": "06GG", "color": "#d0862e" },
          { "name": "Mango", "code": "06WG", "color": "#925119" },
          { "name": "Bonfire", "code": "06AA", "color": "#b4320b" },
          { "name": "Amber Glaze", "code": "06CB", "color": "#954210" },
          { "name": "Cherry Cola", "code": "06RB", "color": "#a03820" },
          { "name": "Sunset", "code": "06CR", "color": "#b32d1b" },
          { "name": "Rocket Fire", "code": "06R", "color": "#b1292e" },
          { "name": "Blaze", "code": "06RR", "color": "#ac1717" },
          { "name": "Mauve Rose", "code": "06VRO", "color": "#995256" }
        ]}
        
        const findClosestColors = (inputHex, ColorData, numMatches = 1 ) => {
          // Include level in the comparison and the result
          let results = [];
          for (const level in ColorData) {
            const levelColors = ColorData[level].map(colorObj => ({
              ...colorObj,
              level,
              distance: chroma.distance(inputHex, colorObj.color)
            }));
            results = results.concat(levelColors);
          }
        
          // Proceed with finding the closest colors, now including level data
          return results
            .sort((a, b) => a.distance - b.distance)
            .slice(0, numMatches)
            .map(match => ({ level: match.level, name: match.name, code: match.code, color: match.color }));
        };
        
        
        const handleClick = () => {
        const matches =  findClosestColors(SelectedHex,ColorData, 3 )
        console.log(matches)
        setClosestColors(matches)
        }
      
    return(
        <Card
        style={{ 
            width: '40rem',
            height:'40rem',
            backgroundColor: '#363940',
              display: 'flex',
              flexDirection: 'column', // Stack items vertically
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
              margin: '5px'
         }}
        >
            {SelectedHex && (
              <span
              style={{ backgroundColor: SelectedHex }}
              >
              <p>Selected Base Color:</p>
              <p>Color: <span>{SelectedHex}</span></p>
              </span>
              )}

            {SelectedLevel && <CardText>This is your selected SelectedLevel{SelectedLevel}</CardText>}
         <Button style={{ margin: '10px'}} onClick={handleClick} variant="info"> OMG</Button>
         {closestColors.map((color, index) => (
            <Button 
            key={index}
            style={{ 
              backgroundColor: color.color,
              width: '50%',
              height: '50%', // Adjust height accordingly
              border: 'none',
              margin: '5px',
              padding: '10px', // Add padding for internal spacing
             
            }}
            >
              <p>Name: {color.name}</p>
              <p>Code: {color.code}</p>
              <p>Level: {color.level}</p>
              <p>Color: {color.color}</p>
            </Button>
          ))}
        </Card>
    )
}

export default SwatchOptions