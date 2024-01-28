import React from "react";
import clipboardIcon from "../../public/icons/Clipboard check.svg";
import ConditionIcon from "./ConditionIcon";
import SuccessProducts from "./SuccessProducts";
import CartTotalAside from "./CartTotalAside";
import ButtonCVA from "./ButtonCva";
const SuccessPage = () => {
  return (
    <div className="flex flex-col p-10 gap-6 items-center">
      <div className="h-16"></div>
      <div className="flex flex-col items-center gap-6">
        <ConditionIcon inconSrc={clipboardIcon} />
        <h3 className="text-2xl font-medium leading-7 text-[#2A5B45]">
          Recibe tu pedido sin preocuparte
        </h3>
        <div className="success-content-title">
          <p className="text-sm font-normal leading-4 w-[346px] text-center">
            El pedido #12387 se encuentra en preparación. Lo recibirás dentro de
            las fechas acordadas en tu envío. Hemos enviado un ticket a tu
            correo electrónico.
          </p>
        </div>
      </div>
      <div className=" flex flex-col p-6 bg-[#F7F5F3]">
        <SuccessProducts />
        <CartTotalAside />
      </div>
      <ButtonCVA
        intent={"greenButton"}
        size={"medium"}
        textColor={"green"}
        linkPath={"/shop"}
      >
        Volver a la tienda
      </ButtonCVA>
    </div>
  );
};

export default SuccessPage;
