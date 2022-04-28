import PropTypes from "prop-types";
import cn from "classnames";


const Button = (props) => {
  const {
    className, 
    buttonText,
    isSliderButtonClick,
  } = props;

  const handleButtonClick = () => {
    if (buttonText === 'Go back') {
      const isShowMiniSlider = true;
      isSliderButtonClick(isShowMiniSlider);
    }
  };

  return (
    <button 
      className={cn(className)}
      onClick={handleButtonClick}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

Button.defaultProps = {
  buttonText: 'Wow',
}

export default Button;
