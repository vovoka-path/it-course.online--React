import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";

import s from "./Characters.module.scss";

import { CHARACTER } from "../../data/characterCards";


function Characters() {
  const [character, setCharacter] = useState(CHARACTER);
  const { pathname } = useLocation();

  const handleLikeClick = (id) => {
    setCharacter((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isLike: !item.isLike } : item
      )
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className={s.cardSection}>
        <Container>
          <div className={s.cardTittle}>
            <Heading level={2} backline>Characters</Heading>
          </div>
          <div className={s.cardWrap}>
            {character.map((item) => {
              return (
                <div key={item.id}>
                  <CharacterCard 
                    character={item} 
                    onLikeClick={handleLikeClick}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Characters;
