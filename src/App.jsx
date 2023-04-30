import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Header,
  Footer,
  Cusine,
  Reservation,
  About,
  Dining,
  Press,
  CookBook,
} from "./components/index";
const App = () => {
  let [active, setActive] = React.useState("");
  return (
    <div className="appMain">
      <BrowserRouter>
        <Header active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cusine" element={<Cusine />} />
          <Route path="/Reservations" element={<Reservation />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dining" element={<Dining />} />
          <Route path="/Press" element={<Press />} />
          <Route path="/CookBook" element={<CookBook />} />
        </Routes>
        <Footer setActive={setActive} />
      </BrowserRouter>
    </div>
  );
};

export default App;
