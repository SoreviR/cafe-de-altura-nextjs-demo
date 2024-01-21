import React from "react";
import CartModalRow from "./CartModalRow";
import ButtonCVA from "./ButtonCva";

const CartModal = ({ cartInfo, clearButton }) => {
  let precioTotal = 0;

  if (cartInfo.length !== 0) {
    cartInfo.forEach((item) => {
      precioTotal += item.price * item.quantity;

      return precioTotal;
    });
  }
  return (
    <aside className="flex flex-col gap-2 items-center p-4 absolute w-96 justify-center rounded-md backdrop-blur-sm bg-[#2B2A2B]/70 right-5 top-5">
      <h2>Carrito 🛒</h2>
      {cartInfo.length === 0 ? (
        <h2>carrito vacio... </h2>
      ) : (
        <div className="flex flex-col gap-5 text-sm w-full">
          <CartModalRow />
          <div className="flex justify-between items-center">
            <button onClick={() => clearButton()}>Limpiar</button>

            {/* <ButtonCVA>Limpiar</ButtonCVA> */}

            <button>Cesta</button>
            <p className="border rounded p-2">Total: {precioTotal} €</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default CartModal;
