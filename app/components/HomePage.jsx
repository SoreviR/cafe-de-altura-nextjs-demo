"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ConditionsSection from "./ConditionsSection";
import NovedadesSection from "./NovedadesSection";
import FAQsection from "./FAQsection";
import FeatureSection from "./FeatureSection";
import SplitTwoTonesSection from "./SplitTwoTonesSection";
import Footer from "./Footer";

const HomePage = () => {
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

export default HomePage;
