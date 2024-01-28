import React from "react";

const CheckoutDebitCard = () => {
  return (
    <form
      className="flex flex-col gap-2 text-xs w-[280px] [&>label]:flex [&>label]:flex-col [&>label]:gap-[3px] [&>label>input]:px-2 [&>label>input]:py-2.5 [&>label>input]:rounded-md"
      action=""
    >
      <label className="">
        Titular
        <input
          className="border border-[#D1D5DB] hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
          type="text"
          placeholder="Nombre del titular"
        />
      </label>
      <label className="">
        Número de la tarjeta
        <input
          className="border border-[#D1D5DB] hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
          type="text"
          placeholder="1234 1234 1234 1234"
        />
      </label>
      <div className="flex gap-6 w-[280px] [&>label]:gap-[3px]">
        <label className="flex flex-col">
          Fecha de caducidad
          <input
            className="border rounded-md border-[#D1D5DB] hover:border-[#9B9EA3] px-2 py-2.5 w-[128px] focus:outline-[#3F8F6B] focus:outline-2"
            type="text"
            placeholder="MM / YY"
          />
        </label>

        <label className="flex flex-col">
          CVC
          <input
            className="border rounded-md border-[#D1D5DB] hover:border-[#9B9EA3] px-2 py-2.5 w-[128px] focus:outline-[#3F8F6B] focus:outline-2"
            type="text"
            placeholder="123"
          />
        </label>
      </div>
    </form>
  );
};

export default CheckoutDebitCard;
