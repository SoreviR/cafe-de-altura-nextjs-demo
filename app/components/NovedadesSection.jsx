import React from "react";
import CardWrapper from "./CardWrapper";
import Link from "next/link";
import arrowIcon from "../../public/icons/Arrow narrow right.svg";
import Image from "next/image";

const NovedadesSection = () => {
  return (
    <div className="flex items-center flex-col p-10 gap-10">
      <h2 className="text-2xl font-medium leading-7 text-[#2A5B45]">
        Novedades
      </h2>
      <CardWrapper />
      <Link
        href={"/shop"}
        className="button-store flex gap-4 items-center text-sm font-semibold leading-4 underline"
      >
        Ver todos
        <Image src={arrowIcon} alt="arrow" />
      </Link>
    </div>
  );
};

export default NovedadesSection;
