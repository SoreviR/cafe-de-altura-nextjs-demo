import Image from "next/image";
import React from "react";
import CartProducts from "./CartProducts";
import Divider from "../../public/images/Divider.jpg";
import CartDeliverySelection from "./CartDeliverySelection";
import CartTotalAside from "./CartTotalAside";

const CartProductsSection = () => {
  return (
    <div className="flex p-2 gap-6 h-[772px]">
      <main className="flex flex-col gap-6">
        <h3 className="text-lg font-semibold leading-6">Productos</h3>

        <CartProducts />

        <CartDeliverySelection />
      </main>

      <CartTotalAside />
    </div>
  );
};

export default CartProductsSection;
