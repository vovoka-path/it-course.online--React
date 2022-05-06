import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Button.module.scss";


const Button = ({
  color,
  children,
  onClick
}) => {
  
  const handleButtonClick = () => {
    onClick && onClick();
  };

  return (
    <button 
      className={cn(s.root, s[color])}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'dark']),
  children: PropTypes.node,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'default',
}

export default Button;
