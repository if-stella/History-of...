import React from 'react'
import './Varfontslider.scss'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from "react";

const fontmarks = [
  {value: 400, label: '400'},
  {value: 500, label: '500'},
  {value: 600, label: '600'},
  {value: 700, label: '700'},
  {value: 800, label: '800'}
];

const Varfontslider = () => {
  const [theme, setTheme] = useState({
    font: "default",
  });

  const { fontW } = theme;

  const changeFW = (event) => {
    const { value } = event.target;
    setTheme((prevState) => ({ ...prevState, fontW: value }));
  };

  return (
    <div className="varFont">
      <main
      data-font-weight={fontW}
      >
      <div className="switchyfont">
        <h1>Stella's Portfolio</h1>
        <h2>EST 2021</h2>
      </div>
      <Box
        className="fontSliderBox"
        sx={{
          width:"400px",
          '@media screen and (max-width: 550px)': {
            width:"311px",
          },
          }}>
        <Slider
        aria-label="Font Size Slider"
        defaultValue={600}
        marks={fontmarks}
        step={100}
        min={400}
        max={800}
        onChange={changeFW}
        sx={{
          color: '#668178',
          '& .MuiSlider-thumb': {
            color:"#668178",
          },
          '& .MuiSlider-thumb:active': {
            color:"#8CADA2",
          },
          "& .MuiSlider-thumb:hover" : {
            webkitBoxShadow: "0.5px 0.5px 10px #394E47 !important",
            boxShadow: "0.5px 0.5px 10px #394E47 !important",
          },
          "& .Mui-focusVisible" : {
            webkitBoxShadow: "0.5px 1px 20px #394E47 !important",
            boxShadow: "0.5px 1px 20px #394E47 !important",
          }
          }}
          />
      </Box>
      </main>
    </div>
  )
}

export default Varfontslider
