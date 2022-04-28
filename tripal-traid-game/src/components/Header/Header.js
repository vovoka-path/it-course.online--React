import { useState, useEffect } from "react";
import cn from "classnames";

import logoPng from '../../images/logo.png';
import Container from '../Container';

import s from './Header.module.scss';


let lastScroll = 0;

const Header = () => {
  const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
  const listMenu = MENU.map((item, index) => 
    <li key={index}><a href="/">{item}</a></li>
  );

  const [ isMinimize, setIsMinimize ] = useState();

  useEffect(() => {
    window.addEventListener('scroll', scrollEffect)
  }, []);
  
  function scrollEffect() {
    const triggerValue = 60;
    const currentScroll = window.scrollY;
    const mustMinimize = (currentScroll > triggerValue) && (lastScroll <= triggerValue);
    const mustMaximize = (currentScroll < triggerValue) && (lastScroll >= triggerValue);

    if (mustMinimize) {
      console.log('> 60', mustMinimize)
      setIsMinimize(true);
    } else if (mustMaximize) {
      console.log('< 60', mustMaximize)
      setIsMinimize(false);
    }

    lastScroll = currentScroll;
  }
  
  return (
    <header className={s.root}>
      <Container>
        <div className={cn(s.header, {[s.small]: isMinimize})}>
          <div className={s.logo}>
            <img src={logoPng} alt="Logo" className={s.logo}/>
          </div>
          <ul className={s.nav}>
            {listMenu}
          </ul>
        </div>
      </Container>
    </header>
  )
};

export default Header;
// window.scrollY s.header класс small
// if (currentScroll < 60 && !scrollDown(lastScroll, currentScroll))
//  && directionDown(lastScroll, currentScroll)