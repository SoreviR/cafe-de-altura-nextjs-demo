/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useContext, useEffect } from "react";
import HeroSection from "./HeroSection";
import ConditionsSection from "./ConditionsSection";
import NovedadesSection from "./NovedadesSection";
import FAQsection from "./FAQsection";
import FeatureSection from "./FeatureSection";
import SplitTwoTonesSection from "./SplitTwoTonesSection";
import Footer from "./Footer";
import { DataContext } from "../context/DataContext";

const HomePage = () => {
  const { setModalCartBool } = useContext(DataContext);

  useEffect(() => {
    setModalCartBool(false);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="h-16"></div>
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
