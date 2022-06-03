import { Outlet } from "react-router-dom";

import Footer from '../Footer';


const LayoutLogin = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
};

export default LayoutLogin;