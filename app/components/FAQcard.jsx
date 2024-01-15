import React from "react";
import dividerLine from "../../public/images/Divider.jpg";
import arrowDown from "../../public/icons/arrow down.svg";
import arrowUp from "../../public/icons/arrow up.svg";
import Image from "next/image";

const FAQcard = ({ question, asnwer, changeArrow, buttonImg }) => {
  return (
    <article className="flex flex-col p-6 gap-4 bg-white w-[668px] rounded-[10px]">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold leading-6">{question}</h3>
        <button onClick={changeArrow} className="cursor-pointer" type="button">
          <Image
            className="answer-button"
            src={buttonImg ? arrowUp : arrowDown}
            alt="arrow"
          />
        </button>
      </div>
      <div
        className={`faq-answer flex flex-col  gap-4 ${
          buttonImg ? "hidden" : ""
        }`}
      >
        <Image src={dividerLine} alt="divider" />
        <p className=" text-xs font-normal leading-4">{asnwer}</p>
      </div>
    </article>
  );
};

export default FAQcard;
