import React from "react";
import CartModalRow from "./CartModalRow";

const CartModal = ({ cartInfo }) => {
  let precioTotal = 0;

  if (cartInfo.length !== 0) {
    cartInfo.forEach((item) => {
      precioTotal += item.price;

      return precioTotal;
    });
  }
  //   console.log("esto es precio total " + precioTotal);
  return (
    <div className="flex flex-col gap-2 items-center p-4 absolute w-96 justify-center rounded-md backdrop-blur-sm bg-[#2B2A2B]/70 right-5 top-5">
      <h2>Carrito</h2>
      {cartInfo.length === 0 ? (
        <h2>carrito vacio... </h2>
      ) : (
        <div className="flex flex-col gap-5 text-sm w-full">
          <CartModalRow cartProducts={cartInfo} />
          <div className="flex justify-between">
            <button>Limpiar</button>
            <button>Cesta</button>
            <p>
              Total:
              {precioTotal}€
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
