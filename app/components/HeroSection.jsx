import React from "react";
import heroImgSrc from "../../public/images/Hero image.png";
import Button from "./Button";
import Image from "next/image";
import ButtonCVA from "./ButtonCva";

const HeroSection = () => {
  return (
    <section className="flex justify-center gap-6 h-[486px] py-12 px-10">
      <article className="flex flex-col justify-center gap-4 w-[588px]">
        <h3 className="text-[#2A5B45] text-lg font-semibold">
          De la planta a tu taza
        </h3>
        <h1 className="text-[40px] font-semibold">
          El mejor café del mundo, ahora en tu casa.
        </h1>
        <p className="text-sm">
          Trabajamos con agricultores de todo el mundo para seleccionar los
          mejores granos de café y que puedas viajar desde la comodidad de tu
          hogar.
        </p>
        <div className="flex gap-4">
          <ButtonCVA
            intent={"blackButton"}
            size={"medium"}
            linkPath={"/origenes"}
          >
            Descrubrir orígenes
          </ButtonCVA>

          <ButtonCVA intent={"greenButton"} size={"medium"} linkPath={"/shop"}>
            Comprar café
          </ButtonCVA>
        </div>
      </article>
      <Image
        className="h-[390px]"
        src={heroImgSrc}
        alt="a hand taking coffe from a tree"
      />
    </section>
  );
};

export default HeroSection;
