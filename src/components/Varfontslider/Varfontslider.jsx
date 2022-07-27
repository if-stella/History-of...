import React from 'react'
import './Varfontslider.scss'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const fontmarks = [
  {value: 0},
  {value: 25},
  {value: 50},
  {value: 75},
  {value: 100}
];

const Varfontslider = () => {
  return (
    <div className="varFont">
      <div className="fontsliderwrap">
        <div><h1 className="switchfont">Stella's Portfolio</h1></div>
        <Box
        className="fontSliderBox"
        sx={{
          width:"500px",
          '@media screen and (max-width: 550px)': {
            width:"311px",
          },
          }}>
        <Slider
        aria-label="Font Size Slider"
        defaultValue={0}
        marks={fontmarks}
        step={25}
        sx={{
          color: '#668178',
          '& .MuiSlider-thumb': {
            color:"#668178",
          },
          '& .MuiSlider-thumb:active': {
            color:"#8CADA2",
          },
          }}
          />
          </Box>
      </div>
      <h2>EST 2021</h2>
    </div>
  )
}

export default Varfontslider
