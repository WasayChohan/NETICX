import React from "react";
import Home from "./Home";
import Service from "./Service";
import WhoWeAre from "./WhoWeAre";
import Sponsor from "../components/Sponsor";
import Review from "../components/Review";
import OurCaseStudy from "./OurCaseStudy";
import Design from "../components/Design";
import Success from "../components/Success";
import TechStack from "../components/TechStack";
import Approach from "./Approach";

function Main() {
  return (
    <div>
      <Home />
      <Service />
      <WhoWeAre />
      <Sponsor />
      <Review />
      <OurCaseStudy />
      <Design />
      <Success />
      <TechStack />
      <Approach />
    </div>
  );
}

export default Main;
