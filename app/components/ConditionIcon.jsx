import React from "react";
import Image from "next/image";

const ConditionIcon = ({ inconSrc }) => {
  return (
    <figure>
      <Image
        className="w-[52px] h-[52px] bg-[#2A5B45] p-3 rounded-[20px] "
        width={225}
        height={243}
        src={inconSrc}
        alt="card condition"
      />
    </figure>
  );
};

export default ConditionIcon;
