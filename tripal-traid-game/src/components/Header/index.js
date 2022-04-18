import style from './Header.module.css';
import logoPng from '../../images/logo.png';
import Container from '../Container';


const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const listMenu = MENU.map((item, index) => 
<li key={index}><a href="/">{item}</a></li>
);

const Header = () => {
  return (
    <header className={style.root}>
      <Container>
        <div className={style.header}>
          <div className={style.logo}>
            <img src={logoPng} alt="Logo" className={style.logo}/>
          </div>
          <ul className={style.nav}>
            {listMenu}
          </ul>
        </div>
      </Container>
    </header>
  )
};

export default Header;