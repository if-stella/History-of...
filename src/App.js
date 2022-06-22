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
      <div className="wrapper flow">
        <h1>
          H1! It's the year <span className="varyear"></span>
        </h1>
        <h2>
          H2! It's the year <span className="varyear"></span>
        </h2>
        <h3>
          H3! It's the year <span className="varyear"></span>
        </h3>
        <h4>
          H4! It's the year <span className="varyear"></span>
        </h4>
        <p>I'm just a small paragraph, to check if everything is working properly...</p>
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
              value="2014"
              label="2014"
            />
            <BackgroundInput
              backgroundColor="#fff"
              color="#000"
              value="2020"
              label="2020"
            />
            {/* <BackgroundInput backgroundColor="#15202b" color="#fff" value="dim" label="Dim" /> */}
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
        defaultChecked={defaultChecked}
      />
      <b>{label}</b>
    </span>
  </label>
);
