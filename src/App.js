import "./App.scss";
import { useState } from "react";
import Anchornav from "./components/Anchornav/Anchornav";

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
        <div className="interface-bar">
          I'm an interface!
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
          </div>
          <div className="head-area">
            <div className="head-image"></div>
            <div className="headlines styled-content">
              <h1>
                Stella's Portfolio
              </h1>
              <h2>
                EST <span className="varyear"></span>
              </h2>
            </div>
          </div>
          <p className="styled-content intro">It's the year <span className="varyear"></span>. My name is Stella Raab, and I’m a passionate Graphic-designer, based in Berlin, Germany. I draw and eat things. As often as possible I love to go to the gym, to throw around heavy things (including myself).</p>
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
          <div className="footer">
            <div className="footer-image"></div>
              <p className="p-small styled-content">© Made with Love by Stella Raab in <span className="varyear"></span></p>
              <span className="p-small footer-links">Impress Contact Privacy</span>
            </div>
          </div>
        </div>
      <div>
      </div>
      <form onChange={onChange}>
          <div className="theme-background flex items-center space-between w-full h-[80px] fixed top-0 p-2 bg-[#0a192f]">
            <BackgroundInput
              backgroundColor="#fff"
              color="#000"
              value="1990"
              label="1990"
              defaultChecked
            />
            <BackgroundInput
              backgroundColor="#fff"
              color="#000"
              value="1991"
              label="1991"
            />
            <BackgroundInput
              backgroundColor="#fff"
              color="#000"
              value="1992"
              label="1992"
            />
            <BackgroundInput
              backgroundColor="#fff"
              color="#000"
              value="1996"
              label="1996"
            />
            <BackgroundInput
              backgroundColor="#fff"
              color="#000"
              value="2014"
              label="2014"
            />
            <BackgroundInput
              backgroundColor="#fff"
              color="#000"
              value="2020"
              label="2020"
            />
          </div>
        </form>
    </main>
    </div>

  );
};

export default App;


const BackgroundInput = ({ backgroundColor, color, value, label, defaultChecked }) => (
  <label
    className="theme-background-input"
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
