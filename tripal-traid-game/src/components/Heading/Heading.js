import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Heading.module.scss";

const Heading = (props) => {
  const { 
    children, 
    level = 1, 
    className, 
    isBlack = false,
    backline,
  } = props;
  const el = `h${level}`;

  return React.createElement(
    el,
    { className: cn(
      s.root, 
      className, 
      { [s.colorBlack]: isBlack },
      { [s.backline]: backline },
      ) },
    children
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  className: PropTypes.string,
  backline: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
  backline: false,
}

export default Heading;
