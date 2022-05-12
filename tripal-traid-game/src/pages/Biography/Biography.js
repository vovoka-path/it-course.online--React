import { useParams, useNavigate } from "react-router-dom";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

import s from "./Biography.module.scss";

import { BIO } from "../../data/bio";


function Biography() {
  const {id} = useParams();
  const navigate = useNavigate();

  const currentBio = BIO[id];

  const handleGoBackClick = () => {
    navigate(-1);
  }

  return (
    <Container>
      <div className={s.btnWrap}>
        <Button 
          color="dark"
          onClick={handleGoBackClick}
          >
          Go back
        </Button>
      </div>
      {
        currentBio.map( (textElement, index) => {
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
        })
      }
    </Container>
  );
}

export default Biography;
