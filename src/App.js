import "./App.scss";
import { useState } from "react";
import Loading from "./components/Loading/Loading";
import MusicPlayer from "./components/Musicplayer/MusicPlayer";
import Bordure from "./components/Bordure/Bordure";
import Tails from "./components/Bordure/Tails";
import Stars from "./components/Stars/Stars";
import Circles from "./components/Circles/Circles";
import Interfacebar from "./components/Interfacebar/Interfacebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Guestcounter from "./components/Guestcounter/Guestcounter";

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
          <div className="bg"></div>
          <Tails />
          <div className="inner-wrap">
          <Bordure />
            <div className="head-area">
              <div className="head-images">
                <div className="head-image"></div>
                <div className="head-image-II"></div>
                <div className="head-image-III"></div>
              </div>
              <div className="head-bg-image"></div>
              <div className="headlines styled-content">
                <h1>Stella's Portfolio</h1>
                <h2>EST <span className="varyear"></span></h2>
                <p className="headp">It's the year <span className="varyear"></span>. My name is Stella Raab, and I’m a passionate graphic-designer, based in Berlin, Germany. I draw and eat things. As often as possible I love to go to the gym, to throw around heavy things (including myself).</p>
              </div>
            </div>
            <p className="styled-content intro">It's the year <span className="varyear"></span>. My name is Stella Raab, and I’m a passionate graphic-designer, based in Berlin, Germany. I draw and eat things. As often as possible I love to go to the gym, to throw around heavy things (including myself).</p>
            <Circles />
            <div className="intro-2017"><p>It's the year 2017. My name is Stella Raab, and I’m a passionate graphic-designer, based in Berlin, Germany. I draw and eat things. As often as possible I love to go to the gym, to throw around heavy things (including myself)</p>
           </div>
            <div className="boxes">
              <div className="content-box">
                <div className="cbox-image cbi-I"></div>
                <span><h3>Content I</h3></span>
                <span><p>I'm just a small paragraph, to check if everything is working properly...</p></span>
              </div>
              <div className="content-box">
                <div className="cbox-image cbi-II"></div>
                <span><h3>Content II</h3></span>
                <span><p>I'm just a small paragraph, to check if everything is working properly...</p></span>
              </div>
              <div className="content-box">
                <div className="cbox-image cbi-III"></div>
                <span><h3>Content III</h3></span>
                <span><p>I'm just a small paragraph, to check if everything is working properly...</p></span>
              </div>
            </div>
            <Stars />
          </div>
          <Guestcounter />
          <Footer />
        </div>
      </div>
      <div>
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
