import React from 'react'
import './Varfontslider.scss'
import Slider from '@mui/material/Slider';
import { useState } from "react";

const fontmarks = [
  {value: 400, label: 'regular'},
  {value: 500},
  {value: 600},
  {value: 700},
  {value: 800, label: 'extrabold'}
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
      <main data-font-weight={fontW}>
        <h1 className="switchyfont">Stella's Portfolio</h1>
        <h2 className="switchyfont">EST 2021</h2>
        <Slider
        aria-label="Font Size Slider"
        defaultValue={600}
        marks={fontmarks}
        step={100}
        min={400}
        max={800}
        onChange={changeFW}
        sx={{
          width:"311px",
          color: '#668178',
          '& .MuiSlider-thumb': {
            color:"#668178",
            webkitBoxShadow: "none !important",
            boxShadow: "none !important",
          },
          '& .MuiSlider-thumb:active': {
            color:"#8CADA2",
            webkitBoxShadow: "none !important",
            boxShadow: "none !important",
          },
          "& .MuiSlider-thumb:hover" : {
            webkitBoxShadow: "none !important",
            boxShadow: "none !important",
          },
          "& .Mui-focusVisible" : {
            webkitBoxShadow: "none !important",
            boxShadow: "none !important",
          },
          '& .MuiSlider-markLabel': {
            color:"#668178",
            fontFamily:"Syne",
            fontSize:"12px",
          },
          '@media screen and (max-width: 550px)': {
            '& .MuiSlider-markLabel': {
              fontSize:"9px",
          }},
          }}
          />
      </main>
    </div>
  )
}

export default Varfontslider
