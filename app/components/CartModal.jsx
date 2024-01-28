import React from "react";
import CartModalRow from "./CartModalRow";
import ButtonCVA from "./ButtonCva";

const CartModal = ({ cartInfo, clearButton, modalState, setModalState }) => {
  const handleModal = () => {
    setModalState(!modalState);
  };

  let precioTotal = 0;

  if (cartInfo.length !== 0) {
    precioTotal = cartInfo.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
  }
  return (
    <aside
      onClick={handleModal}
      className="z-10 absolute w-screen h-screen justify-center backdrop-blur-sm bg-[#2B2A2B]/70 -right-10 top-0 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col z-10 gap-2 overflow-auto scrollbar-hide items-center  p-4 absolute w-96 h-96 justify-center rounded-md backdrop-blur-sm bg-[#2B2A2B]/50 right-5 top-5 min-h-60"
      >
        <h2 className="">Carrito 🛒</h2>
        {cartInfo.length === 0 ? (
          <h2>vacio... </h2>
        ) : (
          <div className="flex flex-col gap-5 text-sm w-full">
            <CartModalRow />
            <div className="flex justify-between items-center">
              {/* <button onClick={() => clearButton()}>Limpiar</button> */}

              <ButtonCVA
                typeFunction={() => clearButton()}
                isFunction={true}
                intent={"greyButton"}
              >
                Limpiar
              </ButtonCVA>

              <ButtonCVA intent={"greenButton"} linkPath={"/cart"}>
                Cesta
              </ButtonCVA>

              <p className="border rounded p-2">Total: {precioTotal} €</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default CartModal;
