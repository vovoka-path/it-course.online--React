import PropTypes from "prop-types";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";
import s from "./Biography.module.scss";

import { BIO } from "../../data/bio";

function Biography(props) {
  const { id } = props;
  const currentBio = BIO[id];

  return (
    <Container>
      {currentBio.map( (textElement, index) => {
        const key = id + '-' + index;
        const type = textElement.type;
        let element;

        if (type === 'paragraph') {
          element = <Text key={key} element="p">{textElement.text}</Text>
        } else if (type === 'img') {
          element = <img key={key} src={textElement.src} className={s.image} alt="bio"/>
        } else if (type === 'h1' || 'h2') {
          element = <Heading key={key} level={+type[1]}>{textElement.text}</Heading>
        }

        return element;
      })}
    </Container>
  );
}

Biography.propTypes = {
  id: PropTypes.number,
};

export default Biography;
