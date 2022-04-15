import "./App.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Text element={"p"} italic={true} />
      <Footer />
    </>
  );
}

export default App;
