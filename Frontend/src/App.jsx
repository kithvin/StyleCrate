import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Contact from "./page/Contact";

const App = () => {
  return (
    <div>
      <Navbar />

      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
