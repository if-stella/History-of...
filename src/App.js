import "./App.scss";
import { useState } from "react";
import Loading from "./components/Loading/Loading";
import MusicPlayer from "./components/Musicplayer/MusicPlayer";

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
          <div className="interface-bar">
            <div className="ibar-image"></div>
            I'm an in-your-face-interface!
          </div>
          <div className="navbar">
              <li>
                <ul>Anchor</ul>
                <ul>Button</ul>
                <ul>Something</ul>
              </li>
          </div>
          <div className="default-content">
            <h1>Hey there.</h1>
            <p>I'm the default text. I only get shown at the beginning. And I describe why it is like this.</p>
            <Loading />
          </div>
          <div className="bg"></div>
          <div className="inner-wrap">
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
            <div id="circle-1">
              <div id="circle-1-cont"><span>I'm just a small paragraph, to check if everything is working properly...</span></div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                <defs>
                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="150" r="50" fill="none"/>
                <g>
                  <use xlinkHref="#circlePath" fill="none"/>
                  <text fill="var(--p-color)">
                  <textPath xlinkHref="#circlePath">Content Content Content Content Content</textPath>
                  </text>
                </g>
              </svg>
            </div>
            <div id="circle-2">
              <div id="circle-2-cont"><span>I'm just a small paragraph, to check if everything is working properly...</span></div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                <defs>
                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="150" r="50" fill="none"/>
                <g>
                  <use xlinkHref="#circlePath" fill="none"/>
                  <text fill="var(--p-color)">
                  <textPath xlinkHref="#circlePath">Content Content Content Content Content</textPath>
                  </text>
                </g>
              </svg>
            </div>
            <div id="circle-3">
              <div id="circle-3-cont"><span>I'm just a small paragraph, to check if everything is working properly...</span></div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                <defs>
                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="150" r="50" fill="none"/>
                <g>
                  <use xlinkHref="#circlePath" fill="none"/>
                  <text fill="var(--p-color)">
                  <textPath xlinkHref="#circlePath">Content Content Content Content Content</textPath>
                  </text>
                </g>
              </svg>
            </div>
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
          </div>
          <div className="footer">
            <div className="footer-image"></div>
              <p className="p-small styled-content">© Made with love by Stella Raab in <span className="varyear"></span></p>
              <span className="p-small footer-links">Impress Contact Privacy</span>
          </div>
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
