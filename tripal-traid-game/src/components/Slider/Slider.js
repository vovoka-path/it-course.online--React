import cn from "classnames";

import Container from '../Container';
import Heading from "../Heading";
import Button from "../Button";

import s from "./Slider.module.scss";


const Slider = () => {

  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={cn(s.container, s.sliderContent)}>
          <Heading level={1} className={s.header}>
            Wow
          </Heading>
          <Heading level={2} className={s.subheader}>
            Wow.Wow.Wow
          </Heading>
          <div className={s.call}>
            <Button 
            >
              Wow
            </Button>
          </div>
        </Container>
        </div>
    </section>
  );
};

export default Slider;
