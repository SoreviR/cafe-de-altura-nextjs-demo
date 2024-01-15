import React from "react";
import Link from "next/link";

const NavigationButton = ({ linkButton, textButton, buttonClass }) => {
  return (
    <li className={buttonClass}>
      <Link href={linkButton}>
        <button>{textButton}</button>
      </Link>
    </li>
  );
};

export default NavigationButton;
