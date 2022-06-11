import Sliderbar from "./components/Sliderbar";
import Currentyear from "./components/Currentyear";
import useLocalStorage from "react-use-localstorage";
import Anchornav from "./components/Anchornav";


function App() {

  return (
    <div className='app'>
      <Anchornav />
      <Currentyear />
    </div>
  );
}

export default App;
