import { useParams, useNavigate, Navigate } from "react-router-dom";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import AnchorLink from "../../components/AnchorLink";

import s from "./Biography.module.scss";

import { BIO } from "../../data/bio";


function Biography() {
  const {id} = useParams();
  const navigate = useNavigate();
  
  const currentBio = BIO[id];

  const handleGoBackClick = () => {
    navigate(-1);
  }

  if (!BIO[id]) {
    return <Navigate to="/characters" />
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
          let hash;

          switch (textType) {
            case 'paragraph':
              return <Text key={key} element="p">{textElement.text}</Text>
            case 'img':
              return <img key={key} src={textElement.src} className={s.image} alt="bio"/>
            case 'h1':
              hash = `${textElement.text.replace(',', '').split(" ").join("_").toLowerCase()}`;

              return (
                <Heading 
                  key={key} 
                  level={+textType[1]}
                >
                  {textElement.text} <AnchorLink hash={hash} />
                </Heading>
              )
            case 'h2':
              hash = `${textElement.text.replace(',', '').split(" ").join("_").toLowerCase()}`;

              return (
                <Heading 
                  key={key} 
                  level={+textType[1]} 
                  hash={hash}
                >
                  {textElement.text} <AnchorLink hash={hash} />
                </Heading>
              )
            default:
              return <Text>{textElement.text}</Text>
          }
        })
      }
    </Container>
  );
}

export default Biography;
