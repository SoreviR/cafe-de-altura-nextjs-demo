import React from "react";
import ConditionIcon from "./ConditionIcon";

const ConditionCard = ({ icon, cardTitle, cardContent }) => {
  return (
    <article className="flex flex-col items-center bg-white justify-center  p-6 gap-4 rounded-lg shadow-md">
      <ConditionIcon inconSrc={icon} />
      <h3 className="font-semibold text-lg leading-6 w-[271px]">{cardTitle}</h3>
      <p className="text-sm font-normal leading-4">{cardContent}</p>
    </article>
  );
};

export default ConditionCard;
