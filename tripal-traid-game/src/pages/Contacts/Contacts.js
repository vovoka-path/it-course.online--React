import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";

import MyPhoto from "./assets/vovoka-path.jpg";

import s from "./Contacts.module.scss";


function Contacts() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <section className={s.contactsSection}>
      <Container>
        <div className={s.cardTittle}>
          <Heading level={2} backline>Contacts</Heading>
        </div>
        <div className={s.wrapElemets}>
          <img key="myphoto" src={MyPhoto} className={s.image} alt="myphoto"/>
          <div className={s.wrapText}>
            <Text key="aboutjob" element="p">
              My ideal job would be – friendly team, fast paced company, availability of learning new things, challenging. I'm hungry for results and realizes how to get a goal. I'll be happy to work with creative and intelligent people. 
            </Text>
            <Text key="hobbies" element="p">
              I play the giutar. I like listening to music. Lots of music in different styles. I play table tennis, basketball, board games.
            </Text>
            <Text key="purpose" element="p">
                I’m always looking for something new. Email me <a href="mailto:vovoka-path@gmail.com">vovoka-path@gmail.com</a>.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
