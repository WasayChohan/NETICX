import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./Pages/Home.js";
import Service from "./Pages/Service.js";
import WhoWeAre from "./Pages/WhoWeAre.js";
import Footer from "./components/Footer.js";
import OurCaseStudy from "./Pages/OurCaseStudy.js";
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
import HmsCaseStudy from "./Pages/ProjectCaseStudy/HmsCaseStudy.js";
import HrmCaseStudy from "./Pages/ProjectCaseStudy/HrmCaseStudy.js";
import CaribbeanCaseStudy from "./Pages/ProjectCaseStudy/CaribbeanCaseStudy.js";

import Sponsor from "./components/Sponsor.js";
import Review from "./components/Review.js";

import Design from "./components/Design.js";
import Success from "./components/Success.js";
import TechStack from "./components/TechStack.js";
import Main from "./Pages/Main.js";

// const RenderSections = () => {
//   const location = useLocation();

//   if (location.pathname === "/") {
//     return (
//       <>
//         <Service />
//         <WhoWeAre />
//         <Sponsor />
//         <Review />
//         <OurCaseStudy />
//         <Design />
//         <Success />
//         <TechStack />
//         <Approach />
//       </>
//     );
//   }
//   return null;
// };

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Main /> */}

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/graphic" element={<Graphic />} />
          <Route path="/content" element={<Content />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/androiddev" element={<Androiddev />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/hmscasestudy" element={<HmsCaseStudy />} />
          <Route path="/hrmcasestudy" element={<HrmCaseStudy />} />
          <Route path="/caribbeancasestudy" element={<CaribbeanCaseStudy />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* Render sections only on the home page */}
        {/* <RenderSections /> */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
