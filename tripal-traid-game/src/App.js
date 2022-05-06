import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Characters from "./pages/Characters";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Biography from "./pages/Biography";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="bio/:id" element={<Biography id={1011334}/>} />
        <Route path="bio" element={<Characters />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App;
