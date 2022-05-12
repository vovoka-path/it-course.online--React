import { useState } from "react";

import Container from "../../components/Container";
import Biography from "../../pages/Biography";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";

import s from "./Characters.module.scss";

import { CHARACTER } from "../../data/characterCards";


function Characters() {
  const [character, setCharacter] = useState(CHARACTER);
  const [characterID, setCharacterID] = useState(null);

  const handleLikeClick = (id) => {
    setCharacter((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isLike: !item.isLike } : item
      )
    );
  };

  const handleBioClick = (id) => {
    setCharacterID(id);
  };

  return (
    <>
      {
        characterID !== null ?
        <Biography id={characterID} onBackClick={() => setCharacterID(null)} /> :
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
                        onBioClick={handleBioClick}
                      />
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        </>
      }
    </>
  );
}

export default Characters;
