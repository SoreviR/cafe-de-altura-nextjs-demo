import React, { useContext } from "react";
import ButtonCVA from "./ButtonCva";
import Image from "next/image";
import { DataContext } from "../context/DataContext";
import Divider from "../../public/images/Divider.jpg";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

const CartProducts = () => {
  const { cartState, addProduct, removeProduct } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-6">
      {cartState.map((product, i) => {
        return (
          <div key={i} className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between ">
                <div className="flex justify-between items-center gap-2">
                  <ButtonCVA
                    intent={"cartButton"}
                    size={"noSize"}
                    roundness={"pill"}
                    isFunction={true}
                    typeFunction={() => removeProduct(product)}
                    functionParam={product}
                  >
                    <Minus size={20} className="pt-1" />
                  </ButtonCVA>
                  <p className="text-xs text-[#2A5B45] font-normal leading-4 px-2 py-1 bg-[#eaefec] rounded-full">
                    {product.quantity}
                  </p>
                  <ButtonCVA
                    intent={"cartButton"}
                    size={"superSmall"}
                    roundness={"pill"}
                    isFunction={true}
                    typeFunction={() => addProduct(product)}
                    functionParam={product}
                  >
                    <Plus size={20} />
                  </ButtonCVA>
                  <Image
                    src={product.img_url}
                    width={56}
                    height={56}
                    alt="product"
                  />
                </div>

                <div className="flex flex-col w-[506px] gap-1">
                  <p className="text-sm font-semibold leading-4">
                    {product.brand}
                  </p>
                  <p className="text-sm font-normal leading-4">
                    Paquete de café, 250 gr
                  </p>
                </div>

                <div className="flex gap-3">
                  <h3 className="text-lg font-semibold leading-6 ">
                    {product.price * product.quantity},00 €
                  </h3>
                </div>
              </div>
            </div>
            <Image
              src={Divider}
              width={776}
              height={1}
              alt="Divider"
              className="bg-[#E3DED7]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CartProducts;
