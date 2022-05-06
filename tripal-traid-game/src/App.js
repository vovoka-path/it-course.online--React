import { useState } from "react";

import Container from "./components/Container";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Biography from "./pages/Biography";
import Heading from "./components/Heading";
import CharacterCard from "./components/CharacterCard";

import s from "./App.module.scss";

import { CHARACTER } from "./data/characterCards";


const App = () => {
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
      <Header />
      {
        characterID !== null ?
        <Biography id={characterID} onBackClick={() => setCharacterID(null)} /> :
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
      <Footer />
    </>
  );
}

export default App;
