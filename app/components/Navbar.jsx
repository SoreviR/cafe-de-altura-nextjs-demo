import React from "react";
import CafeDeAlturaLogo from "./CafeDeAlturaLogo";
import NavigationLinks from "./NavigationLinks";
import PhoneNumber from "./PhoneNumber";
import CartBagIcon from "./CartBagIcon";
import ButtonCVA from "./ButtonCva";

const Navbar = () => {
  return (
    <nav className="text-white fixed flex z-10 justify-between px-10 py-3 bg-[#2B2A2B] w-full items-center font-semibold">
      <CafeDeAlturaLogo />
      <NavigationLinks />
      <div className="flex gap-6">
        <PhoneNumber />

        <ButtonCVA intent={"greyButton"} size={"medium"} linkPath={"/"}>
          Iniciar sesión
        </ButtonCVA>
      </div>

      <CartBagIcon />
    </nav>
  );
};

export default Navbar;
