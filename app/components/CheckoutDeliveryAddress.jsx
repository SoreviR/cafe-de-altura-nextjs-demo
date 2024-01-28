import React from "react";

const CheckoutDeliveryAddress = () => {
  return (
    <form
      className="flex flex-col text-xs w-[521px] gap-2 [&>label]:flex [&>label]:flex-col [&>label]:gap-[3px] [&>label>input]:px-2 [&>label>input]:py-2.5 [&>label>input]:rounded-md"
      action=""
    >
      <label>
        Nombre
        <input
          className="border border-[#D1D5DB] hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
          type="text"
        />
      </label>

      <label>
        Apellidos
        <input
          className="border border-[#D1D5DB] hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
          type="text"
        />
      </label>

      <label>
        Teléfono
        <input
          className="border border-[#D1D5DB] hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
          type="tel"
          placeholder="+34 600 6000 600"
        />
      </label>

      <label>
        Email
        <input
          className="border border-[#D1D5DB] hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
          type="email"
        />
      </label>

      <label>
        País
        <select
          className="border border-[#D1D5DB] hover:border-[#9B9EA3] rounded-md px-2 py-2.5 focus:outline-[#3F8F6B] focus:outline-2"
          name=""
          id=""
        >
          <option value="">Seleccionar</option>
          <option value="">Seleccion 1</option>
        </select>
      </label>

      <div className="flex gap-6 [&>label]:flex [&>label]:gap-[3px] [&>label]:flex-col [&>label>input]:px-2 [&>label>input]:py-2.5 [&>label>input]:border [&>label>input]:border-[#D1D5DB] [&>label>input]:rounded-md">
        <label className="w-[248px]">
          Población
          <input
            className="hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
            type="text"
          />
        </label>

        <label className="w-[248px]">
          CP
          <input
            className="hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
            type="text"
            placeholder="123"
          />
        </label>
      </div>

      <div className="flex gap-6 w-[521px] [&>label]:flex [&>label]:gap-[3px] [&>label]:flex-col [&>label>input]:px-2 [&>label>input]:py-2.5 [&>label>input]:border [&>label>input]:border-[#D1D5DB] [&>label>input]:rounded-md">
        <label className="w-[112px]">
          Calle
          <input
            className="hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
            type="text"
          />
        </label>

        <label className="w-[112px]">
          Nº
          <input
            className="hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
            type="text"
          />
        </label>

        <label className="w-[112px]">
          Piso
          <input
            className="hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
            type="text"
          />
        </label>

        <label className="w-[112px]">
          Puerta
          <input
            className="hover:border-[#9B9EA3] focus:outline-[#3F8F6B] focus:outline-2"
            type="text"
          />
        </label>
      </div>
    </form>
  );
};

export default CheckoutDeliveryAddress;
