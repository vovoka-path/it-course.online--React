import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";

import s from "./About.module.scss";

import { ABOUT } from "../../data/about";


function About() {
  return (
    <section className={s.cardSection}>
      <Container>
        <div className={s.cardTittle}>
          <Heading level={2} backline>About Game</Heading>
        </div>
        {ABOUT.map( (paragraph, index) => {
          const key = index;

          return <Text key={key} element="p">{paragraph.text}</Text>
        })
        }
      </Container>
    </section>
  );
}

export default About;
