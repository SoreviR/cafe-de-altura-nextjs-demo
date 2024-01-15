"use client";

import React from "react";
import ShopSection from "../components/ShopSection";
import ConditionsSection from "../components/ConditionsSection";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <ShopSection />
      <ConditionsSection />
      <Footer />
    </div>
  );
};

export default page;
