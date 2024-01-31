import React, { useState } from "react";
import CheckoutDebitCard from "./CheckoutDebitCard";
import Image from "next/image";
import Divider from "../../public/images/Divider.jpg";
import BizumIcon from "../../public/images/bizum icon.png";
import CheckoutDeliveryAddress from "./CheckoutDeliveryAddress";
import CartTotalAside from "./CartTotalAside";

const CheckoutPage = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [isValidated, setIsValidated] = useState(false);

  const handleValidation = () => {
    setIsValidated(!isValidated);
  };

  const handleSelection = (e) => {
    setIsSelected(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-center p-10 gap-6">
      <div className="h-11"></div>

      <h2 className="text-[#2A5B45] font-medium text-2xl">Checkout</h2>

      <div className="flex gap-6 p-2">
        <main className="flex flex-col gap-6 w-[792px]">
          <h3 onClick={handleValidation} className="font-semibold text-lg">
            Seleccionar método de pago
          </h3>
          <div className="flex gap-4">
            <input
              className="accent-[#2A5B45]"
              type="radio"
              name="forma-de-pago"
              value={0}
              checked={isSelected == 0 ? true : false}
              onChange={handleSelection}
            />
            <div>
              <p className="text-sm font-semibold">Tarjeta de débito</p>
              <p className="text-sm">Opción estándar sin seguimiento</p>
            </div>
            <div className="w-[55px] h-6"></div>
          </div>

          {isSelected == 0 ? <CheckoutDebitCard /> : ""}

          <Image className="" src={Divider} alt="" width={776} height={1} />

          <div className="flex gap-4">
            <input
              className="accent-[#2A5B45]"
              type="radio"
              name="forma-de-pago"
              value={1}
              checked={isSelected == 1 ? true : false}
              onChange={handleSelection}
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold">
                Transferencia bancaria{" "}
                {isSelected == 1 ? "a la cuenta ES12 1234 1234 123457890" : ""}
              </p>
              {isSelected == 1 ? (
                <p className="text-sm">
                  Será necesario recibir el comprobante de la transferencia para
                  preparar tu pedido
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <Image src={Divider} alt="Divider" width={776} height={1} />

          <div className="flex items-center gap-4">
            <input
              className="accent-[#2A5B45]"
              type="radio"
              name="forma-de-pago"
              value={2}
              checked={isSelected == 2 ? true : false}
              onChange={handleSelection}
            />
            <p className="text-sm font-semibold">Bizum</p>
            {isSelected == 2 ? (
              <div className="flex items-center gap-2">
                <Image
                  src={BizumIcon}
                  alt="Bizum icon"
                  width={70}
                  height={30}
                />
                <p className="text-sm font-semibold">+34 919 49 05 18</p>
              </div>
            ) : (
              ""
            )}
          </div>

          <h3 className="text-lg font-semibold">Dirección de envío</h3>

          <CheckoutDeliveryAddress />
        </main>
        <aside className="flex flex-col items-center w-[384px] h-[280px] p-4 bg-[#F7F5F3] gap-4">
          <CartTotalAside isPage={"checkout"} validated={isValidated} />
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
