import React, { useContext } from "react";
import clipboardIcon from "../../public/icons/Clipboard check.svg";
import ConditionIcon from "./ConditionIcon";
import SuccessProducts from "./SuccessProducts";
import CartTotalAside from "./CartTotalAside";
import ButtonCVA from "./ButtonCva";
import { usePathname } from "next/navigation";
import { DataContext } from "../context/DataContext";
import Link from "next/link";
const SuccessPage = () => {
  const { setIsSuccessPage, clearCart } = useContext(DataContext);

  const pathname = usePathname();

  if (pathname === "/success") {
    setIsSuccessPage(true);
  }

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
      <Link href={"/shop"}>
        <ButtonCVA
          intent={"greenButton"}
          size={"medium"}
          textColor={"green"}
          typeFunction={() => clearCart()}
          isFunction={true}
        >
          Volver a la tienda
        </ButtonCVA>
      </Link>
    </div>
  );
};

export default SuccessPage;
