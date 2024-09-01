import React from "react";

import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./Pages/Home.js";
import Service from "./Pages/Service.js";
import WhoWeAre from "./Pages/WhoWeAre.js";
import Footer from "./components/Footer.js";
import Products from "./Pages/Products.js";
import Approach from "./Pages/Approach.js";
import Portfolio from "./Pages/Portfolio.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/products" element={<Products />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
