import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Button from "./Button";
import ButtonCVA from "./ButtonCva";

const CartModalRow = () => {
  const { addProduct, removeProduct, cartState } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-4 boder-white border p-2 text rounded">
      {cartState.map((product, i) => {
        return (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-2">
                <ButtonCVA
                  intent={"cartBagButton"}
                  size={"superSmall"}
                  roundness={"pill"}
                  isFunction={true}
                  typeFunction={() => removeProduct(product)}
                  functionParam={product}
                >
                  -
                </ButtonCVA>

                <Image
                  src={product.img_url}
                  width={50}
                  height={50}
                  alt="product"
                />
                <ButtonCVA
                  intent={"cartBagButton"}
                  size={"superSmall"}
                  roundness={"pill"}
                  isFunction={true}
                  typeFunction={() => addProduct(product)}
                  functionParam={product}
                >
                  +
                </ButtonCVA>
              </div>

              <p>{product.brand}</p>
              <div className="flex gap-3">
                <p>x{product.quantity}</p>
                <p>{product.price} €</p>
              </div>
            </div>
            <div className="w-auto h-[1px] bg-white"></div>
          </div>
        );
      })}
    </div>
  );
};

export default CartModalRow;
