import React from "react";
import bagIcon from "../../public/icons/cart-bag-icon.png";
import Link from "next/link";
import Image from "next/image";

const CartBagIcon = () => {
  return (
    <figure className="flex gap-2">
      <Link href="/cart" className="cart-bag-icon">
        <Image src={bagIcon} alt="cart icon" />
      </Link>
      <p
        className={`cart-count text-xs font-normal leading-4 px-2 py-1 bg-[#3f3e3f] rounded-full hidden`}
      >
        {/* {cartProducts.length} */}
      </p>
    </figure>
  );
};

export default CartBagIcon;
