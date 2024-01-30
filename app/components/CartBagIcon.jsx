"use client";

import React, { useContext } from "react";
import bagIcon from "../../public/icons/cart-bag-icon.png";
import Image from "next/image";
import { DataContext } from "../context/DataContext";
import CartModal from "./CartModal";

const CartBagIcon = () => {
  const {
    modalCartBool,
    setModalCartBool,
    cartState,
    clearCart,
    bagTotalProducts,
    isSuccessPage,
  } = useContext(DataContext);

  let bagQuantity = cartState.length;

  const handleModal = () => {
    setModalCartBool(!modalCartBool);
  };

  return (
    <figure className="flex gap-2 relative">
      <button
        onClick={handleModal}
        disabled={isSuccessPage}
        className="cart-bag-icon"
      >
        <Image src={bagIcon} alt="cart icon" />
      </button>

      <p
        className={`cart-count text-xs font-normal leading-4 px-2 py-1 bg-[#3f3e3f] rounded-full ${
          bagQuantity > 0 && !isSuccessPage ? "" : "hidden"
        }`}
      >
        {bagTotalProducts}
      </p>
      {modalCartBool && (
        <CartModal
          modalState={modalCartBool}
          setModalState={setModalCartBool}
          cartInfo={cartState}
          clearButton={() => clearCart()}
        />
      )}
    </figure>
  );
};

export default CartBagIcon;
