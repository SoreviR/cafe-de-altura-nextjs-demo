import React from "react";
import Link from "next/link";
import ButtonCVA from "./ButtonCva";

const FormSide = () => {
  return (
    <aside className="w-[588px] p-8 pl-12 bg-white">
      <form
        className="flex flex-col gap-6 text-xs font-normal leading-4"
        action=""
      >
        <div className="flex flex-col gap-1">
          <label>Nombre completo</label>
          <input
            className="px-[9px] py-[13px] border rounded-md hover:border-[#9B9EA3] focus:outline-[#3F8F6B]"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            className="px-[9px] py-[13px] border rounded-md hover:border-[#9B9EA3] focus:outline-[#3F8F6B]"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Teléfono</label>

          {/* focus-within:border-[#3F8F6B] focus-within:border-[3px] hover:border-[#9B9EA3] */}
          <div className="phone-information flex px-[9px] py-[13px] border rounded-md">
            <select className="outline-none" id="country" name="country">
              <option>ES</option>
              <option defaultValue={"US"}>US</option>
            </select>

            <input
              className="w-full h-13px px-[13px] outline-none"
              type="tel"
              placeholder="+1 (555) 987-6543"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label> </label>
          <textarea
            className="border rounded-md px-[17px] py-[13px] hover:border-[#9B9EA3] focus:outline-[#3F8F6B]"
            name=""
            id=""
            cols="60"
            rows="7"
            placeholder="¿En qué podemos ayudarte?"
          ></textarea>
        </div>

        <div className="flex gap-3">
          <input
            className="accent-[#2A5B45] hover:bg-none focus:bg-none"
            type="checkbox"
          />
          <p className="text-sm font-normal leading-4">
            Acepto la <Link href={""}>Política de Privacidad</Link> y los
            <Link href={""}>Términos y condiciones.</Link>
          </p>
        </div>
        <div className="">
          <ButtonCVA intent={"greenButton"} size={"medium"} linkPath={"/"}>
            Enviar
          </ButtonCVA>
        </div>
      </form>
    </aside>
  );
};

export default FormSide;
