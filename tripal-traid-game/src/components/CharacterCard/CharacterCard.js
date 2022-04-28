import { useState } from "react";
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
  console.log('CARD ############### id=', id)

  const [active, setActive] = useState(isLike);

  const handleLikeClick = () => {
    setActive((prevState) => !prevState);
    onLikeClick(id);
  };

  const handleBioClick = () => {
    const data = {
      'id': id,
      'isShow': true,
    };
    //const isShow = true;
    onBioClick(data);

    //console.log('CARD: data=', data)
    //console.log('CARD clicked on READ BIO: id', data.id, 'isBioClick', data.isShow)
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
