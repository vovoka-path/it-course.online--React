import { Outlet } from "react-router-dom";

import Header from '../Header';
import Footer from '../Footer';

import s from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <div className={s.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Layout;