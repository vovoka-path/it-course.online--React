import { useState, useEffect } from "react";
import cn from "classnames";
import Container from '../Container';
import Heading from "../Heading";
import Button from "../Button";
import s from "./Slider.module.scss";

//const isMiniSlider = false;

  let buttonText;
  let HeadingComponent;

const Slider = (props) => {
  const { isShowFullSlider, goBackButtonClick } = props;
  //console.log('SLIDER ###############')
  //console.log('SLIDER: START isMiniSlider', isShowFullSlider);

  const sliderClass = cn(s.slider, {[s.sliderLight]: isShowFullSlider});
  const buttonClass = cn(s.button, {[s.buttonLight]: isShowFullSlider});
  
  if (isShowFullSlider) {
    HeadingComponent = () => {<></>};
    //console.log('IF: isMiniSlider:', true)
    buttonText = 'Go back';
  } else {
    //console.log('IF: isMiniSlider:', false)
    buttonText = 'Wow';

    HeadingComponent = () => {
      return (
        <>
          <Heading level={1} className={s.header}>
            Wow
          </Heading>
          <Heading level={2} className={s.subheader}>
            Wow.Wow.Wow
          </Heading>
        </>
      )
    };
  }

  //console.log('SLIDER: Before useState: isMiniSlider=', isMiniSlider);
  const [ isButtonClick, setIsButtonClick ] = useState(isShowFullSlider);
  //console.log('SLIDER: After useState: isButtonClick=', isButtonClick);


  const handleButtonClick = (isShowMiniSlider) => {
    setIsButtonClick(!isShowMiniSlider);
    goBackButtonClick(isButtonClick);
  };

  //console.log('SLIDER: isMiniSlider', isMiniSlider);
  //console.log('SLIDER: buttonText', buttonText);


  // useEffect(() => {
  //   //console.log('SLIDER: useEffect: isButtonClick', isButtonClick);

  //   if (!isButtonClick) {
  //     HeadingComponent = () => {<></>};
  //     buttonText = 'Go back';
  //   }
  // }) 

  //console.log('SLIDER: headingComponent', HeadingComponent());
  

  return (
    <section className={s.section}>
      <div className={sliderClass}>
        <Container className={cn(s.container, s.sliderContent)}>
          <HeadingComponent />
          <div className={s.call}>
            <Button 
              className={buttonClass} 
              buttonText={buttonText}
              isSliderButtonClick={handleButtonClick} 
            />
          </div>
        </Container>
        </div>
    </section>
  );
};

export default Slider;
