import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Heading.module.css";

const Heading = (props) => {
  const { children, level = 1, className, isBlack = false } = props;
  const el = `h${level}`;

  return React.createElement(
    el,
    { className: cn(s.root, className, { [s.colorBlack]: isBlack }) },
    children
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  className: PropTypes.string,
};

export default Heading;
