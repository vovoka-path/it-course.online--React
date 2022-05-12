import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";

import Heading from "../Heading";
import Text from "../Text";
import { ReactComponent as Like } from "./assets/heart.svg";

import s from "./CharacterCard.module.scss";

const CharacterCard = ({ 
  character, 
  onLikeClick, 
  onBioClick,
 }) => {
  const { id, name, description, thumbnail, humanName, isLike } = character;
  const [active, setActive] = useState(isLike);

  const handleLikeClick = () => {
    setActive((prevState) => !prevState);
    onLikeClick && onLikeClick(id);
  };

  const handleBioClick = () => {
    onBioClick && onBioClick(id);
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
            onClick={handleLikeClick}
          >
            <Like />
          </div>

          <div 
            className={s.readBio} 
            onClick={handleBioClick}
          >
            <Link to={"/characters/" + id}>Read bio</Link>
            {/* <Link to={"../bio/" + id}>Read bio</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.object,
    humanName: PropTypes.string,
    isLike: PropTypes.bool,
  }),
  onLikeClick: PropTypes.func,
  onBioClick: PropTypes.func,
};

export default CharacterCard;
