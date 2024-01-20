"use client";

import React, { useContext } from "react";
import bagIcon from "../../public/icons/cart-bag-icon.png";
import Link from "next/link";
import Image from "next/image";
import { DataContext } from "../context/DataContext";
import CartModal from "./CartModal";

const CartBagIcon = () => {
  const { modalCart, setModalCart, cartState } = useContext(DataContext);

  const handleModal = () => {
    setModalCart(!modalCart);
  };

  return (
    <figure className="flex gap-2 relative">
      <button onClick={handleModal} className="cart-bag-icon">
        <Image src={bagIcon} alt="cart icon" />
      </button>
      <p
        className={`cart-count text-xs font-normal leading-4 px-2 py-1 bg-[#3f3e3f] rounded-full hidden`}
      >
        {/* {cartProducts.length} */}
      </p>
      {modalCart && <CartModal cartInfo={cartState} />}
    </figure>
  );
};

export default CartBagIcon;
