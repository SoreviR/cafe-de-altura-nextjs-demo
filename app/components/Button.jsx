"use client";

import Link from "next/link";

const Button = ({
  buttonText,
  linkPath,
  buttonClass,
  isDisable,
  productSend,
  addProduct,
}) => {
  return (
    <Link href={linkPath} className={buttonClass}>
      <button
        type="button"
        disabled={isDisable}
        onClick={(e) => {
          e.preventDefault();
          addProduct(productSend);
        }}
        className="text-sm font-semibold"
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default Button;
