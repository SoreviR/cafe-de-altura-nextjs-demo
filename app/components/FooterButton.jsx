import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterButton = ({ iconImg, text }) => {
  return (
    <Link href={""}>
      <button className="flex gap-2 px-6 py-3 bg-[#515051] rounded items-center">
        <Image src={iconImg} alt="" />
        <p className="text-sm font-semibold leading-4">{text}</p>
      </button>
    </Link>
  );
};

export default FooterButton;
