import { useState } from "react";

import Container from "../../components/Container";
import Slider from "../../components/Slider";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";

import s from "./Main.module.scss";

import { CHARACTER } from "../../data/characterCards";


const Main = () => {
  const [character, setCharacter] = useState(CHARACTER);

  const handleLikeClick = (id) => {
    setCharacter((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isLike: !item.isLike } : item
      )
    );
  };

  return (
    <>
      <Slider />
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

export default Main;
