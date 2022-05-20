import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Heading.module.scss";

const Heading = (props) => {
  const { 
    children, 
    level = 1, 
    className, 
    isBlack,
    backline,
    hash,
  } = props;
  const el = `h${level}`;

  return React.createElement(
    el,
    { id: hash,
      className: cn(
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
  hash: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  backline: false,
  hash: "",
}

export default Heading;
