import React from "react";
import ContactSide from "./ContactSide";
import FormSide from "./FormSide";

const SplitTwoTonesSection = () => {
  return (
    <section className="flex justify-center w-full bg-[#E3DED7]">
      <div className="flex gap-6">
        <ContactSide />
        <FormSide />
      </div>
    </section>
  );
};

export default SplitTwoTonesSection;
