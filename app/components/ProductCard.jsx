import React from "react";
import Button from "./Button";
import Image from "next/image";

const ProductCard = ({
  productImg,
  productBrand,
  productPrice,
  productAvailable,
}) => {
  let cardAvailable = productAvailable ? "opacity-100" : "opacity-50";
  let buttonDisable = productAvailable ? "" : "disabled";

  return (
    <div
      className={`group hover:bg-[#e3ded7] p-6 gap-6 rounded-lg border border-[#e3ded7] flex flex-col items-center ${cardAvailable}`}
    >
      <figure className="">
        <Image src={productImg} alt="" width={225} height={243} />
      </figure>
      <h5 className="text-sm font-semibold leading-4">{productBrand}</h5>
      <p className="text-sm font-normal leading-4">
        {productPrice.toFixed(2)} €
      </p>

      <Button
        buttonText="Añadir"
        linkPath=""
        buttonClass={`rounded-[4px] p-2 bg-[#2a5b45b3] text-white group-hover:bg-[#2a5b45]`}
        isDisable={buttonDisable}
      />
    </div>
  );
};

export default ProductCard;
