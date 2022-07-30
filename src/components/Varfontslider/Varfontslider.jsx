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
          width:"400px",
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
          },
          '& .MuiSlider-markLabel': {
            color:"#668178",
            fontFamily:"Syne",
          },
          '@media screen and (max-width: 750px)': {
            '& .MuiSlider-markLabel': {
              fontSize:"12px",
          }},
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
