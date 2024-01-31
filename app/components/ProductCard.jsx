import React, { useContext } from "react";
import Image from "next/image";
import { DataContext } from "../context/DataContext";
import ButtonCVA from "./ButtonCva";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({
  productImg,
  productBrand,
  productPrice,
  productAvailable,
  sendProduct,
}) => {
  let cardAvailable = productAvailable ? "opacity-100" : "opacity-50";
  let buttonDisable = productAvailable ? true : false;

  const { addProduct } = useContext(DataContext);

  return (
    <div
      className={`group hover:bg-[#e3ded7] p-6 gap-6 rounded-lg border border-[#e3ded7] flex flex-col items-center ${cardAvailable}`}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: { background: "#2B2A2B", color: "#FFFF" },
        }}
        reverseOrder={false}
      />
      <figure className="">
        <Image src={productImg} alt="coffe card" width={220} height={220} />
      </figure>
      <h5 className="text-sm font-semibold leading-4">{productBrand}</h5>
      <p className="text-sm font-normal leading-4">
        {productPrice.toFixed(2)} €
      </p>
      <ButtonCVA
        intent={"addButton"}
        size={"small"}
        isDisable={!buttonDisable}
        isFunction={true}
        typeFunction={() => {
          addProduct(sendProduct);
          toast("Producto agregado");
        }}
        functionParam={sendProduct}
        cursor={buttonDisable ? "" : "disabled"}
      >
        Añadir
      </ButtonCVA>
    </div>
  );
};

export default ProductCard;
