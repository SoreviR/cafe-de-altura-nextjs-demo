/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import CartProductsSection from "./CartProductsSection";

const CartPage = () => {
  const { setModalCartBool, cartState } = useContext(DataContext);

  let bagTotalProducts = 0;
  cartState.forEach((product) => (bagTotalProducts += product.quantity));

  useEffect(() => {
    setModalCartBool(false);
  }, []);

  return (
    <div className="p-10">
      <div className="h-6"></div>
      <section className="flex flex-col items-center p-10 gap-6">
        <h2
          id="cesta-count"
          className="text-2xl font-medium leading-7 text-[#2A5B45]"
        >
          Cesta ({bagTotalProducts})
        </h2>
      </section>
      <CartProductsSection />
    </div>
  );
};

export default CartPage;
