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
import Webdev from "./Pages/ServicePages/Webdev.js";
import Graphic from "./Pages/ServicePages/Graphic.js";
import Content from "./Pages/ServicePages/Content.js";
import Digital from "./Pages/ServicePages/Digital.js";
import Androiddev from "./Pages/ServicePages/Androiddev.js";
import Automation from "./Pages/ServicePages/Automation.js";
import Uiux from "./Pages/ServicePages/Uiux.js";
import Blockchain from "./Pages/ServicePages/Blockchain.js";
import Ai from "./Pages/ServicePages/Ai.js";
import Contact from "./components/Contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/graphic" element={<Graphic />} />
          <Route path="/content" element={<Content />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/androiddev" element={<Androiddev />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ai" element={<Ai />} />

          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/products" element={<Products />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/portfolio" element={<Portfolio id="portfolio" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
