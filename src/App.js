import Sliderbar from "./components/Sliderbar";
import Year1990 from "./components/Year1990";
import Year2000 from "./components/Year2000";
import Year2022 from "./components/Year2022";
import useLocalStorage from "react-use-localstorage";
import Anchornav from "./components/Anchornav";


function App() {

  return (
    <div className='app'>
      <Anchornav />
      <Year1990 />
      <Year2000 />
      <Year2022 />
    </div>
  );
}

export default App;
