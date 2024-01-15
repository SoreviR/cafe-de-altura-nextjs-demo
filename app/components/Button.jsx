import React from "react";
import Link from "next/link";

const Button = ({ buttonText, linkPath, buttonClass, isDisable }) => {
  return (
    <Link href={linkPath} className={buttonClass}>
      <button
        type="button"
        disabled={isDisable}
        onClick={""}
        className="text-sm font-semibold"
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default Button;
