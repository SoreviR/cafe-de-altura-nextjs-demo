import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

const PhoneNumber = () => {
  return (
    <div className="flex gap-6">
      <Link href="/phone-number" className="flex items-center gap-2">
        <Phone size={21} />
        <p className="text-sm font-semibold">+34 919 49 05 18</p>
      </Link>
    </div>
  );
};

export default PhoneNumber;
