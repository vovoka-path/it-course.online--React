import { Link, useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import cn from "classnames";

import logoPng from '../../images/logo.png';
import Container from '../Container';

import s from './Header.module.scss';

const MENU = [
  {
    title: 'Main',
    href: '/'
  },
  {
    title: 'Characters',
    href: '/characters'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contacts',
    href: '/contacts'
  },
]

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
            {
              MENU.map((item, index) => (
                <li key={index}>
                  <NavLink 
                    to={item.href}
                    className={({ isActive }) => {
                      return isActive ? s.active : null;
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </header>
  )
};

export default Header;
