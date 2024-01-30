import Image from "next/image";
import React, { useContext } from "react";
import Divider from "../../public/images/Divider.jpg";
import { DataContext } from "../context/DataContext";

const CartDeliverySelection = () => {
  const { isChecked, setIsChecked } = useContext(DataContext);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold leading-6">Seleccionar envío</h3>

      <div className="flex justify-between gap-4">
        <input
          className=" accent-[#2A5B45]"
          type="radio"
          name="delivery"
          id="free-delivery"
          checked={isChecked}
          onChange={() => handleCheck()}
        />
        <div className="flex flex-col gap-1 w-full">
          <p className="text-sm font-semibold leading-4">Envío 5-7 días</p>
          <p className="text-sm font-normal leading-4">
            Opción estándar sin seguimiento
          </p>
        </div>
        <h3 className="text-lg font-semibold leading-6">GRATIS</h3>
      </div>

      <Image
        src={Divider}
        width={776}
        height={1}
        alt="Divider"
        className="bg-[#E3DED7]"
      />

      <div className="flex justify-between gap-4">
        <input
          className=" accent-[#2A5B45]"
          type="radio"
          name="delivery"
          id="urgent-delivery"
          checked={!isChecked}
          onChange={() => handleCheck()}
        />
        <div className="flex flex-col gap-1 w-full">
          <p className="text-sm font-semibold leading-4">Envío urgente 24h</p>
          <p className="text-sm font-normal leading-4">
            Recibe tu pedido en las siguientes 24h (Para pedidos realizados
            antes de las 13:00).
          </p>
        </div>
        <h3 className="text-lg font-semibold leading-6">9,00€</h3>
      </div>
    </div>
  );
};

export default CartDeliverySelection;
