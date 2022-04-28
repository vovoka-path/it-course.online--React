import { useState } from "react";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Biography from "./pages/Biography";


function App() {
  const [ 
    bioData, 
    setBioData 
  ] = useState({
    'id': 0,
    'isShow': false,
  });

  let content;

  togglePage(bioData.isShow);

  function togglePage(isShowBio) {
    switch (isShowBio) {
      case false:
        content = (
          <Cards 
            onBioClick={handleBioClickInApp} 
          />
        )
        break;
      case true:
        content = (
          <Biography 
            id={bioData.id}
          />
        )
        break;   
      default:
        break;
    }
  }

  function handleBioClickInApp(data) {
    setBioData(data);
  };
  
  function handleGoBackButtonClick(isButtonClick) {
    const data = {...bioData, isShow: isButtonClick};

    setBioData(data);
    togglePage(data);
  }

  return (
    <>
      <Header />
      <Slider 
        goBackButtonClick={handleGoBackButtonClick} 
        isShowFullSlider={bioData.isShow}
      />
      {content}
      <Footer />
    </>
  );
}

export default App;
