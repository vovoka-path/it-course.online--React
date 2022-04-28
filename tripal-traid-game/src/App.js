import { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text";
import Container from "./components/Container";
import Section from "./components/Section";
import Heading from "./components/Heading";
import Cards from "./components/Cards";
import Biography from "./pages/Biography";

import s from "./App.module.scss";

function App() {
  const [ 
    bioData, 
    setBioData 
  ] = useState({
    'id': 0,
    'isShow': false,
  });

  console.log('APP: bioData=', bioData);
  
  const handleBioClickInApp = (data) => {
    console.log('APP: handleBioClickInApp #1  id=', data.id, 'isBioClick=', data.isShow);
    
    //bioData = Object.assign({}, data);
    setBioData(data);
    // console.log('APP: handleBioClickInApp #2  id=', bioData[0], 
    // 'isBioClick=', bioData[1]);

    //togglePage(showBio);
  };
  
  const handleGoBackButtonClick = (bool) => {
    const data = {...bioData, isShow: bool};

    setBioData(data);
    togglePage(data);
  }
  
  let content;

  togglePage(bioData.isShow);

  function togglePage(isShowBio) {
    switch (isShowBio) {
      case false:
        content = (
          <Cards 
            onBioClick={handleBioClickInApp} 
            // bioClick={bioData}
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

  //console.log('APP: id=', bioData[0], 'isBioClick=', bioData[1])

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
