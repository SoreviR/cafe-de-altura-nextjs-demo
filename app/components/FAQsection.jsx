import React from "react";
import FAQwrapper from "./FAQwrapper";

const FAQsection = () => {
  return (
    <div className="bg-[#2A5B45] w-full py-12 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-medium leading-7 text-white">
        Preguntas frecuentes
      </h2>
      <FAQwrapper />
    </div>
  );
};

export default FAQsection;
