import React from "react";
import Link from "next/link";
import logoIcon from "../../public/icons/ps_coffee-hot.png";
import Image from "next/image";

const CafeDeAlturaLogo = () => {
  return (
    <figure className="flex items-center gap-2">
      <Link href="/" className="text-2xl font-normal">
        cafedealtura.com
      </Link>

      <Image className="w-5 h-6" src={logoIcon} alt="logo icon" />
    </figure>
  );
};
export default CafeDeAlturaLogo;
