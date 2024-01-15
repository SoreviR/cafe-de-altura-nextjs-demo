import React from "react";
import NavigationButton from "./NavigationButton";

const NavigationLinks = () => {
  const linksNavButtons = [
    {
      link: "/shop",
      buttonText: "Tienda",
      classButton: "hover:bg-[#f7f5f31a]",
    },
    {
      link: "/suscription",
      buttonText: "Suscripción",
      classButton: "hover:bg-[#f7f5f31a]",
    },
    {
      link: "/bussiness",
      buttonText: "Para empresas",
      classButton: "hover:bg-[#f7f5f31a]",
    },
    {
      link: "/about-us",
      buttonText: "Sobre nosotros",
      classButton: "hover:bg-[#f7f5f31a]",
    },
    {
      link: "/contact",
      buttonText: "Contacto",
      classButton: "hover:bg-[#f7f5f31a]",
    },
  ];
  return (
    <ul className="flex gap-4 [&>li]:px-2 [&>li]:py-2 [&>li]:rounded-xl [&>li>a]:text-sm">
      {linksNavButtons.map((button, i) => {
        return (
          <NavigationButton
            key={i}
            linkButton={button.link}
            textButton={button.buttonText}
            buttonClass={button.classButton}
          />
        );
      })}
    </ul>
  );
};

export default NavigationLinks;
