/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import ShopSection from "./ShopSection";
import ConditionsSection from "./ConditionsSection";
import Footer from "./Footer";
import { DataContext } from "../context/DataContext";

const ShopPage = () => {
  const { setModalCartBool } = useContext(DataContext);

  useEffect(() => {
    setModalCartBool(false);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="h-16"></div>
      <ShopSection />
      <ConditionsSection />
      <Footer />
    </div>
  );
};

export default ShopPage;
