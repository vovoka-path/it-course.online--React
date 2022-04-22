import { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Heading from "../Heading";
import Text from "../Text";
import { ReactComponent as Like } from "./assets/heart.svg";
import s from "./CharacterCard.module.scss";

const CharacterCard = ({ character, onLikeClick }) => {
  const { id, name, description, thumbnail, humanName, isLike } = character;

  character.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.objestringct,
    thumbnail: PropTypes.object,
    humanName: PropTypes.string,
    isLike: PropTypes.bool,
    onLikeClick: PropTypes.func,
  };

  const [active, setActive] = useState(isLike);

  const handleClick = () => {
    setActive((prevState) => !prevState);
    onLikeClick(id);
  };

  return (
    <div className={s.root}>
      <img src={thumbnail.path} alt={name} className={s.cardImage} />
      <div className={s.cardDetails}>
        <Heading className={s.cardName} level={2}>
          {name}
        </Heading>
        <Heading className={s.cardHumanName} level={3}>
          {humanName}
        </Heading>
        <Text className={s.cardDescription}>{description}</Text>

        <div className={s.cardMeta}>
          <div
            className={cn(s.like, { [s.active]: active })}
            onClick={handleClick}
          >
            <Like />
          </div>
          <div className={s.readBio}>
            <a href="#">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  character: PropTypes.object,
};

export default CharacterCard;
