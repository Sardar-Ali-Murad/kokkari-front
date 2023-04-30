import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Header, Footer, Cusine, Reservation ,About,Dining,Press,CookBook} from "./components/index";
const App = () => {
  return (
    <div className="appMain">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cusine" element={<Cusine />} />
          <Route path="/Reservations" element={<Reservation />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dining" element={<Dining />} />
          <Route path="/Press" element={<Press />} />
          <Route path="/CookBook" element={<CookBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
