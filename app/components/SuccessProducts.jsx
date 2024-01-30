import Image from "next/image";
import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const SuccessProducts = () => {
  const { cartState, clearCart } = useContext(DataContext);
  // const [successData, setSuccessData] = useState(null);

  return (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-lg font-semibold leading-6">Tu pedido</h3>
      {cartState.map((product, i) => {
        return (
          <div key={i} className="flex justify-between">
            <div className="flex gap-6">
              <Image
                src={product.img_url}
                width={56}
                height={56}
                alt="product"
              />

              <div className="flex flex-col w-[506px] gap-1">
                <p className="text-sm font-semibold leading-4">
                  {product.brand}
                </p>
                <p className="text-sm font-normal leading-4">
                  Paquete de café, 250 gr
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <h3 className="text-lg font-semibold leading-6 ">
                {product.price * product.quantity},00 €
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SuccessProducts;
