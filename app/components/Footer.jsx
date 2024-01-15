import React from "react";
import CafeDeAlturaLogo from "./CafeDeAlturaLogo";
import FooterButton from "./FooterButton";
import phoneIcon from "../../public/icons/Phone.svg";
import mailIcon from "../../public/icons/Mail-white.svg";
import FooterLink from "./FooterLink";

const Footer = () => {
  const linksArray1 = [
    ["/shop", "Tienda"],
    ["", "Suscripción"],
    ["", "Para empresas"],
    ["", "Sobre nosotros"],
    ["", "Contacto"],
  ];
  const linksArray2 = [
    ["", "Política de privacidad"],
    ["", "Política de cookies"],
    ["", "Términos y condiciones"],
  ];

  return (
    <div className="bg-black w-full">
      <article className="py-7 px-8 flex flex-col gap-4 w-[1200px] bg-black text-white">
        <CafeDeAlturaLogo />

        <div className="flex justify-between w-[1132px] h-[152px]">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold leading-6">Te ayudamos en</h3>
            <FooterButton iconImg={phoneIcon} text={"+34 919 49 05 18"} />
            <FooterButton iconImg={mailIcon} text={"hola@cafedealtura.com"} />
          </div>

          <ul className="flex flex-col gap-4 text-sm font-semibold leading-4 ml-[120px]">
            {linksArray1.map((link, i) => (
              <FooterLink key={i} linkPath={link[0]} linkText={link[1]} />
            ))}
          </ul>

          <ul className="flex flex-col gap-4 text-sm font-semibold leading-4">
            {linksArray2.map((link, i) => (
              <FooterLink key={i} linkPath={link[0]} linkText={link[1]} />
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Footer;
