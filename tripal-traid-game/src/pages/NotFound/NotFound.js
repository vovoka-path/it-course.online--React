import Container from "../../components/Container";
import Heading from "../../components/Heading";

import s from "./NotFound.module.scss";


function NotFound() {

  return (
    <section className={s.cardSection}>
      <Container>
        <div className={s.cardTittle}>
          <Heading level={2} backline>Not found 404</Heading>
        </div>
      </Container>
    </section>
  );
}

export default NotFound;
