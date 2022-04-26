import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Section.module.scss";

const Section = ({ 
  children, 
  className,
  cardSection,
}) => {
  return (
    <div className={
        cn(
          s.root, 
          {[s.cardSection]: cardSection}, 
          className,
        )}>
      {children}
    </div>
  )
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cardSection: PropTypes.bool,
};

Section.defaultProps = {
  cardSection: false,
}

export default Section;
