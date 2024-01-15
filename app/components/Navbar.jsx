import React from "react";
import CafeDeAlturaLogo from "./CafeDeAlturaLogo";
import NavigationLinks from "./NavigationLinks";
import PhoneNumber from "./PhoneNumber";
import Button from "./Button";
import CartBagIcon from "./CartBagIcon";

const Navbar = () => {
  return (
    <nav className="text-white flex justify-between px-10 py-3 bg-[#2B2A2B] w-full items-center font-semibold">
      <CafeDeAlturaLogo />
      <NavigationLinks />
      <div className="flex gap-6">
        <PhoneNumber />
        <Button
          buttonText={"Iniciar sesión"}
          linkPath={"/login"}
          buttonClass={"bg-[#515051] rounded text-sm font-semibold py-3 px-6"}
        />
      </div>

      <CartBagIcon />
    </nav>
  );
};

export default Navbar;
