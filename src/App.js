import "./App.scss";
import { useState } from "react";
import Loading from "./components/Loading/Loading";
import MusicPlayer from "./components/Musicplayer/MusicPlayer";
import Bordure from "./components/2006-Bordure/Bordure";
import Tails from "./components/2006-Bordure/Tails";
import Stars from "./components/Stars/Stars";
import Circles from "./components/2017-Circles/Circles";
import Interfacebar from "./components/Interfacebar/Interfacebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Guestcounter from "./components/Guestcounter/Guestcounter";
import Macbook2010 from "./components/2010-interface/Macbook2010";
import Intro from "./components/Intro/Intro";
import Grainbg from "./components/2017-Grain-bg/Grainbg";
import Head from "./components/Head/Head";
import Boxes from "./components/Boxes/Boxes";
import Slider from '@mui/material/Slider';

import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs';
import NoResp from "./components/Responsive-default/NoResp";
import Varfontslider from "./components/Varfontslider/Varfontslider";

const App = () => {
  const [theme, setTheme] = useState({
    year: "default",
  });

  const marks = [
    {value: 1990,label: '1990'},
    {value: 1991,label: '1991'},
    {value: 1992,label: '1992'},
    {value: 1996,label: '1996'},
    {value: 1998,label: '1998'},
    {value: 2000,label: '2000'},
    {value: 2001,label: '2001'},
    {value: 2006,label: '2006'},
    {value: 2010,label: '2010'},
    {value: 2014,label: '2014'},
    {value: 2017,label: '2017'},
    {value: 2019,label: '2019'},
    {value: 2021,label: '2021'},
    {value: 2022,label: '2022'},
  ];

  const { year, modus } = theme;

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(!checked);
    const { name, value } = event.target;
    setTheme((prevState) => ({ ...prevState, [name]: value }));
  };

  const themeChange = (event) => {
    const { value } = event.target;
    setTheme((prevState) => ({ ...prevState, year: value }));
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setTheme((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <main
      data-theme-modus={modus}
      data-theme-year={year}
      className="background"
      >
        <div className="wrapper">
          <div className="main-content">
            <MusicPlayer />
            <Interfacebar />
            <Navbar />
            <div className="default-content">
              <h1>Hey there.</h1>
              <p>It's the year 2022. Wonder, what this digital portfolio would have looked like, since the beginning of the internet? Use the slider to find out!</p>
              <Loading />
            </div>
            <Grainbg />
            <Tails />
            <div className="inner-wrap">
              <Bordure />
              <Head />
              <Varfontslider />
              <Circles />
              <Intro />
              <Boxes />
              <Stars />
              <NoResp />
            </div>
            <Macbook2010 />
            <Guestcounter />
            <Footer />
          </div>
        </div>
        <div className="sliderbox">
              <Slider
              size="small"
              aria-label="Custom marks"
              defaultValue={1990}
              onChange={themeChange}
              min={1990}
              max={2022}
              marks={marks}
              step={null}
              sx={{
                color: 'white',
                '& .MuiSlider-thumb': {
                  color:"white",
                },
                '& .MuiSlider-thumb:active': {
                  color:"lightblue",
                },
                '& .MuiSlider-markLabel': {
                  color:"lightgrey",
                  fontFamily:"Space Grotesk",
                  fontSize:"14px",
                },
                '@media screen and (max-width: 750px)': {
                  '& .MuiSlider-markLabel': {
                    fontSize:"12px",
                }},
                '@media screen and (max-width: 550px)': {
                  '& .MuiSlider-markLabel': {
                    fontSize:"9px",
                    transform: "rotate(45deg)",
                }},
                }}
              />
              </div>
        <form onChange={onChange}>
            <div className="yearswitch-container">
              <YearSwitch
                value="1990"
                label="1990"
              />
              <YearSwitch
                value="1991"
                label="1991"
              />
              <YearSwitch
                value="1992"
                label="1992"
              />
              <YearSwitch
                value="1996"
                label="1996"
              />
              <YearSwitch
                value="1998"
                label="1998"
              />
              <YearSwitch
                value="2000"
                label="2000"
              />
              <YearSwitch
                value="2001"
                label="2001"
              />
              <YearSwitch
                value="2006"
                label="2006"
              />
              <YearSwitch
                value="2010"
                label="2010"
              />
              <YearSwitch
                value="2014"
                label="2014"
              />
              <YearSwitch
                value="2017"
                label="2017"
              />
              <YearSwitch
                value="2019"
                label="2019"
              />
            </div>
        </form>
        <form onChange={handleChange}>
        <DarkMode
                backgroundColor={checked ? '#ffffffcb' : '#1d0202c3'}
                color={checked ? '#1D0202' : '#fff'}
                value= {checked ? 'light' : 'dark'}
                label= {checked ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
                defaultChecked
              />
        </form>
      </main>
    </div>
  );
};

export default App;

const YearSwitch = ({ backgroundColor, color, value, label }) => (
  <label
    className="year-input"
    style={{ backgroundColor, color, fontFamily: `Space Grotesk` }}
    htmlFor={value}
  >
    <span>
      <input
        type="radio"
        id={value}
        name="year"
        value={value}
      />
      <b>{label}</b>
    </span>
  </label>
);

const DarkMode = ({ backgroundColor, color, value, label }) => (
  <label
    className="darktheme-2017"
    style={{ backgroundColor, color }}
    htmlFor={value}
  >
    <span>
      <input
        type="checkbox"
        id={value}
        name="modus"
        value={value}
      />
      <b>{label}</b>
    </span>
  </label>
);
