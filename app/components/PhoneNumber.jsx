import React from "react";
import Link from "next/link";
import phoneIcon from "../../public/icons/Phone.svg";
import Image from "next/image";

const PhoneNumber = () => {
  return (
    <div className="flex gap-6">
      <Link href="/phone-number" className="flex items-center gap-2">
        <Image
          className="w-6 h-6"
          src={phoneIcon}
          alt="phone icon"
          width={225}
          height={243}
        />
        <p className="text-sm font-semibold">+34 919 49 05 18</p>
      </Link>
    </div>
  );
};

export default PhoneNumber;
