import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Button from "./Button";
import ButtonCVA from "./ButtonCva";

const CartModalRow = () => {
  const { addProduct, cartState } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-4 boder-white border p-2 rounded">
      {cartState.map((product, i) => {
        console.log(product);
        return (
          <div key={i} className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <Button
                buttonText={"+"}
                linkPath=""
                productSend={product}
                addProduct={() => addProduct(product)}
              />

              <Image
                src={product.img_url}
                width={50}
                height={50}
                alt="product"
              />
              <button>-</button>
            </div>

            <p>{product.brand}</p>
            <div className="flex gap-3">
              <p>x{product.quantity}</p>
              <p>{product.price} €</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartModalRow;
