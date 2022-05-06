import { useState, useEffect } from "react";
import cn from "classnames";

import logoPng from '../../images/logo.png';
import Container from '../Container';

import s from './Header.module.scss';


const Header = () => {
  const [ isMinimize, setIsMinimize ] = useState(window.scrollY > 60);
  const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
  
  useEffect(() => {
    const scrollEffect = () => setIsMinimize(window.scrollY > 60);
  
    window.addEventListener('scroll', scrollEffect);

    return () => {
      window.removeEventListener('scroll', scrollEffect);
    }
  }, []);
  
  
  return (
    <header className={s.root}>
      <Container>
        <div className={cn(s.header, {[s.small]: isMinimize})}>
          <div className={s.logo}>
            <img src={logoPng} alt="Logo" className={s.logo}/>
          </div>
          <ul className={s.nav}>
            {MENU.map((item, index) => 
              <li key={index}><a href="/">{item}</a></li>
            )}
          </ul>
        </div>
      </Container>
    </header>
  )
};

export default Header;
