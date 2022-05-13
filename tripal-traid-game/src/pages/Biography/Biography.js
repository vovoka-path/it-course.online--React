import { useEffect } from "react";
import { useParams, useNavigate, Navigate, useLocation } from "react-router-dom";

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
  const { pathname, hash } = useLocation();
  
  const currentBio = BIO[id];

  const handleGoBackClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(hash.slice(1)).scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    }
  }, [hash, pathname]);

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

          switch (textType) {
            case 'paragraph':
              return <Text key={key} element="p">{textElement.text}</Text>
            case 'img':
              return <img key={key} src={textElement.src} className={s.image} alt="bio"/>
            case 'h1':
              return <Heading key={key} level={+textType[1]}>{textElement.text}</Heading>
            case 'h2':
              const hash = `${textElement.text.replace(',', '').split(" ").join("_").toLowerCase()}`;

              return (
                <Heading key={key} level={+textType[1]} hash={hash}>
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
