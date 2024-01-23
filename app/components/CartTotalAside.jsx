import React, { useContext } from "react";
import Divider from "../../public/images/Divider.jpg";
import Image from "next/image";
import { DataContext } from "../context/DataContext";
import Link from "next/link";
import ButtonCVA from "./ButtonCva";

const CartTotalAside = () => {
  const { isChecked, cartState } = useContext(DataContext);

  let cartSubtotal = 0;
  if (cartState.length > 0) {
    cartSubtotal = cartState.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    console.log(cartSubtotal);
  }

  const deliverySelected = isChecked ? "GRATIS" : "9,00 €";

  return (
    <aside className="flex flex-col w-[384px] h-[280px] p-4 bg-[#F7F5F3] gap-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold leading-6">Total del carrito</h3>
        <Image
          src={Divider}
          width={336}
          height={1}
          alt="Divider"
          className="bg-[#E3DED7]"
        />
        <div className="flex justify-between">
          <p className="text-sm font-normal leading-4">SUBTOTAL</p>
          <p className="subtotal text-sm font-semibold leading-4">
            {cartState.length > 0 ? cartSubtotal.toFixed(2) + " €" : ""}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-sm font-normal leading-4">ENVÍO</p>
          <p className="delivery-type text-sm font-semibold leading-4">
            {deliverySelected}
          </p>
        </div>
        <Image
          src={Divider}
          width={336}
          height={1}
          alt="Divider"
          className="bg-[#E3DED7]"
        />
        <div className="flex justify-between">
          <p className="text-sm font-semibold leading-4">TOTAL</p>
          <div className="flex flex-col gap-2">
            <p className="total-product-price text-sm font-semibold leading-4 self-end">
              {cartSubtotal + (isChecked ? 0 : 9) + ",00 €"}
            </p>
            <p className="text-xs font-normal leading-4">
              Incluye 3,78€ de IVA
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <ButtonCVA
          intent={"greenButton"}
          size={"medium"}
          linkPath={"/checkout"}
        >
          Ir a checkout
        </ButtonCVA>
        <ButtonCVA
          intent={"toupeButton"}
          size={"medium"}
          textColor={"green"}
          linkPath={"/shop"}
        >
          Seguir comprando
        </ButtonCVA>
      </div>
    </aside>
  );
};

export default CartTotalAside;
