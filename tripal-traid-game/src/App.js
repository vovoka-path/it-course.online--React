import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text";
import Container from "./components/Container";
import Heading from "./components/Heading";

import s from "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <section className={s.cardSection}>
        <Container>
          <Heading level={2}>
            Heading 1 / level 2
          </Heading>
          <Heading level={4}>
            Heading 2 / level 4
          </Heading>
          <Text element={"p"} italic strong />
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default App;
