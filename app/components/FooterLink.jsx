import React from "react";
import Link from "next/link";

const FooterLink = ({ linkPath, linkText }) => {
  return (
    <li>
      <Link href={linkPath}>{linkText}</Link>
    </li>
  );
};

export default FooterLink;
