import { useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import CharacterCard from "../CharacterCard";
import s from "./Cards.module.scss";

import { CHARACTER } from "../../data/characterCards";

const Cards = () => {
  const [character, setCharacter] = useState(CHARACTER);

  const handleLikeClick = (id) => {
    setCharacter(
      character.map((item) =>
        item.id === id ? { ...item, isLike: !item.isLike } : item
      )
    );
  };

  return (
    <section className={s.cardSection}>
      <Container>
        <div className={s.cardTittle}>
          <Heading backline>Marvel Cards</Heading>
          <Heading level={2}>Collect your best five</Heading>
        </div>
        <div className={s.cardWrap}>
          {character.map((item) => {
            return (
              <div key={item.id}>
                <CharacterCard character={item} onLikeClick={handleLikeClick} />
              </div>
            );
          })}
        </div>
        {/* <button
          onClick={() => console.log(character.map((item) => item.isLike))}
        >
          CHECK isLike
        </button> */}
      </Container>
    </section>
  );
};

export default Cards;
