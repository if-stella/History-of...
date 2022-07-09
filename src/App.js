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

const App = () => {
  const [theme, setTheme] = useState({
    size: "md",
    color: "blue",
    background: "light",
  });

  const { background, color } = theme;

  const onChange = (event) => {
    const { name, value } = event.target;
    setTheme((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <main
      data-theme-color={color}
      data-theme-background={background}
      className="background"
    >
      <div className="wrapper">
        <div className="main-content">
          <MusicPlayer />
          <Interfacebar />
          <Navbar />
          <div className="default-content">
            <h1>Hey there.</h1>
            <p>I'm the default text. I only get shown at the beginning. And I describe why it is like this.</p>
            <Loading />
          </div>
          <Grainbg />
          <Tails />
          <div className="inner-wrap">
            <Bordure />
            <Head />
            <Circles />
            <Intro />
            <Boxes />
            <Stars />
          </div>
          <Macbook2010 />
          <Guestcounter />
          <Footer />
        </div>
      </div>
      <form onChange={onChange}>
          <div className="theme-background flex items-center space-between w-full h-[80px] fixed top-0 p-2 bg-[#0a192f]">
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="1990"
              label="90"
              defaultChecked
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="1991"
              label="91"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="1992"
              label="92"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="1996"
              label="96"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="1998"
              label="98"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="2000"
              label="00"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="2001"
              label="01"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="2006"
              label="06"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="2010"
              label="10"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="2014"
              label="14"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="2017"
              label="17"
            />
            <YearSwitch
              backgroundColor="#fff"
              color="#000"
              value="2019"
              label="19"
            />
          </div>
      </form>
    </main>
    </div>
  );
};

export default App;

const YearSwitch = ({ backgroundColor, color, value, label }) => (
  <label
    className="year-input"
    style={{ backgroundColor, color, border: `1px solid ${color}` }}
    htmlFor={value}
  >
    <span>
      <input
        type="radio"
        id={value}
        name="background"
        value={value}
      />
      <b>{label}</b>
    </span>
  </label>
);
