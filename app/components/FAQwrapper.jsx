import React, { useState } from "react";
import FAQcard from "./FAQcard";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "../../public/icons/Arrow narrow right white.svg";

const FAQwrapper = () => {
  const [handleArrow, setHandleArrow] = useState(Array(3).fill(true));

  const handleChangeArrow = (index) => {
    setHandleArrow((prev) => {
      const holdPrev = [...prev];
      holdPrev[index] = !holdPrev[index];
      return holdPrev;
    });
  };

  const faqArray = [
    {
      question: "¿Cómo hago el pedido?",
      asnwer:
        "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.",
    },
    {
      question: "¿Por qué los precios son tan bajos?",
      asnwer:
        "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.",
    },
    {
      question: "¿Es posible enviar café a mi oficina?",
      asnwer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, autem corrupti. Rerum, aliquid, nobis aspernatur culpa quo dolores molestias deserunt maxime sapiente tempora delectus distinctio atque quam dolor, nostrum tenetur",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div></div>
      {faqArray.map((item, i) => {
        return (
          <FAQcard
            key={i}
            question={item.question}
            asnwer={item.asnwer}
            changeArrow={() => handleChangeArrow(i)}
            buttonImg={handleArrow[i]}
          />
        );
      })}
      <footer className="">
        <Link
          to={""}
          className="flex gap-4 items-center underline text-white text-sm font-semibold leading-4"
          href=""
        >
          Resolvemos tus dudas
          <Image src={arrowIcon} alt="arrow" />
        </Link>
      </footer>
    </div>
  );
};

export default FAQwrapper;
