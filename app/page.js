"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import ConditionsSection from "./components/ConditionsSection";
import NovedadesSection from "./components/NovedadesSection";
import FAQsection from "./components/FAQsection";
import FeatureSection from "./components/FeatureSection";
import SplitTwoTonesSection from "./components/SplitTwoTonesSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <ConditionsSection />
      <NovedadesSection />
      <FAQsection />
      <FeatureSection />
      <SplitTwoTonesSection />
      <Footer />
    </div>
  );
};

export default Home;
