import { useState } from "react";
import cn from "classnames";

import Container from '../Container';
import Heading from "../Heading";
import Button from "../Button";

import s from "./Slider.module.scss";


const Slider = (props) => {
  const { isShowFullSlider, goBackButtonClick } = props;
  
  const sliderClass = cn(s.slider, {[s.sliderLight]: isShowFullSlider});
  const buttonClass = cn(s.button, {[s.buttonLight]: isShowFullSlider});
  
  let buttonText;
  let HeadingComponent;

  if (isShowFullSlider) {
    buttonText = 'Go back';
    HeadingComponent = () => {<></>};
  } else {
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

  const [ isButtonClick, setIsButtonClick ] = useState(isShowFullSlider);

  const handleButtonClick = (isShowMiniSlider) => {
    setIsButtonClick(!isShowMiniSlider);
    goBackButtonClick(isButtonClick);
  };

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
