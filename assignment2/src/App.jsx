import { SliderData } from "./imageData";
import ImageSlider from "./components/imageSlider";
import "./App.css";

function App() {
  return (
    <>
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default App;
