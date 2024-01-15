import React from "react";
import heroImgSrc from "../../public/images/Hero image.png";
import Button from "./Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex justify-center gap-6 h-[486px] p-12">
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
          <Button
            buttonText={"Descrubrir orígenes"}
            linkPath={"/origenes"}
            buttonClass={"bg-black text-white rounded py-3 px-6"}
          />

          <Button
            buttonText={"Comprar café"}
            linkPath={"/shop"}
            buttonClass={"bg-[#2A5B45] text-white rounded py-3 px-6"}
          />
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
