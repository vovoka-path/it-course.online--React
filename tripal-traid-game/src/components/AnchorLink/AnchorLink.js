import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as LinkIcon } from "./assets/link_icon.svg";

import s from "./AnchorLink.module.scss";

const AnchorLink = ({ hash }) => {
  const { pathname } = useLocation();

  return (
    <Link 
      className={s.root}
      to={`${pathname}#${hash}`}>
        <LinkIcon />
    </Link>
  );
};

export default AnchorLink;
