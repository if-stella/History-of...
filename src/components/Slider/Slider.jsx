import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1990,
    label: '90',
  },
  {
    value: 1991,
    label: '91',
  },
  {
    value: 1992,
    label: '92',
  },
  {
    value: 1995,
    label: '95',
  },
  {
    value: 1996,
    label: '96',
  },
  {
    value: 2000,
    label: '00',
  },
  {
    value: 2001,
    label: '01',
  },
  {
    value: 2020,
    label: '20',
  },
  {
    value: 2022,
    label: '2022',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 600 }}>
      <Slider
        // max: new Date("2013-06-21").getTime(),
        // 86400000 milliseconds for a day
        // step: 86400000,
        // value: new Date("2013-06-17").getTime(),

        aria-label="Custom marks"
        defaultValue={2022}
        getAriaValueText={valuetext}
        min={1990}
        step={1}
        max={2022}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{
          color: 'gray'
        }}
      />
    </Box>
  );
}
