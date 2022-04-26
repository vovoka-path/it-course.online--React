import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Text.module.scss";

const Text = (props) => {
  const {
    className = s.padding20,
    children,
    element = "div",
    strong = false,
    italic = false,
    disabled = false,
  } = props;

  const styles = {
    className: cn(
      s.root,
      { 
        [s.strong]: strong, 
        [s.italic]: italic, 
        [s.disabled]: disabled 
      },
      className
    ),
  };

  const text = `
    Welcome! I'm smart component. My name is <Tetx />. 
    I keep a lot of interesting things inside me. Some call it all "props".
    I can get it and use it in my code.
    For example, className = ${className}, strong = ${strong}, 
    italic = ${italic} and disabled = ${disabled}.
  `;

  return React.createElement(element, styles, children ? children : text);
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  element: PropTypes.oneOf(["div", "p", "span"]),
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Text;

/*
Компонент <Text /> должен включать в себя несколько props

element - он может быть одним из элементов div p span
children - то что мы передадим как дочерние узлы
className - мы всегда должны иметь возможность добавить дополнительные классы нашему компоненту
strong - это boolean переменная делает текст внутри компонента либо жирным либо нет
italic - это boolean переменная делает текст внутри компонента либо курсивом либо нет
disabled - делает наш текст внутри компонента недоступным, добавляет прозрачности в 0.6, а так же добавляет cursor: not-allowed;
Все эти компоненты расположите в новом блоке между <Slider /> и <Footer />

У рутового компонента который вы расположите по аналогии со Slider задайте цвет фона background: #f7f7f7;
*/
