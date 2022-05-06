import PropTypes from "prop-types";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

import s from "./Biography.module.scss";

import { BIO } from "../../data/bio";


function Biography({ id, onBackClick }) {
  const currentBio = BIO[id];

  const handleBackClick = () => {
    onBackClick && onBackClick();
  }

  return (
    <Container>
      <div className={s.btnWrap}>
        <Button 
          color="dark" 
          onClick={handleBackClick}
          >
            Go Back
          </Button>
      </div>
      {currentBio.map( (textElement, index) => {
        const key = id + '-' + index;
        const textType = textElement.type;

        switch (textType) {
          case 'paragraph':
            return <Text key={key} element="p">{textElement.text}</Text>
          case 'img':
            return <img key={key} src={textElement.src} className={s.image} alt="bio"/>
          case 'h1':
            return <Heading key={key} level={+textType[1]}>{textElement.text}</Heading>
          case 'h2':
            return <Heading key={key} level={+textType[1]}>{textElement.text}</Heading>
          default:
            return <Text>{textElement.text}</Text>
        }
      })}
    </Container>
  );
}

Biography.propTypes = {
  id: PropTypes.number,
  onBackClick: PropTypes.func,
};

export default Biography;
