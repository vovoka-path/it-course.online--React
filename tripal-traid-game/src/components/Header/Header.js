import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import cn from "classnames";

import logoPng from '../../images/logo.png';
import Container from '../Container';

import s from './Header.module.scss';


const Header = () => {
  const navigate = useNavigate();
  const [ isMinimize, setIsMinimize ] = useState(window.scrollY > 60);

  const handleLogoClick = () => {
    navigate('/');
  }
  
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
            <img src={logoPng} alt="Logo" className={s.logo} onClick={handleLogoClick}/>
          </div>
          <ul className={s.nav}>
            <li key="Main"><Link to="/">Main</Link></li>
            <li key="Characters"><Link to="bio">Characters</Link></li>
            <li key="About"><Link to="about">About</Link></li>
            <li key="Contacts"><Link to="contacts">Contacts</Link></li>
          </ul>
        </div>
      </Container>
    </header>
  )
};

export default Header;
