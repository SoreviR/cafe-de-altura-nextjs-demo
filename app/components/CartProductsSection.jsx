import React from "react";
import CartProducts from "./CartProducts";
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
      <aside className="flex flex-col items-center w-[384px] h-[280px] p-4 bg-[#F7F5F3] gap-4">
        <CartTotalAside isPage={"cart"} />
      </aside>
    </div>
  );
};

export default CartProductsSection;
