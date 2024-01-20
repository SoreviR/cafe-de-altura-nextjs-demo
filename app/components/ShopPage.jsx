import React from "react";
import ShopSection from "./ShopSection";
import ConditionsSection from "./ConditionsSection";
import Footer from "./Footer";

const ShopPage = () => {
  return (
    <div className="flex flex-col items-center">
      <ShopSection />
      <ConditionsSection />
      <Footer />
    </div>
  );
};

export default ShopPage;
