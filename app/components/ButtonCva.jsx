import React from "react";
import { cva } from "class-variance-authority";
import Link from "next/link";
//class-variance-authority: library

const ButtonCva = cva(
  /* button base style */
  "text-white rounded text-sm font-semibold transition-colors duration-150",
  {
    variants: {
      /* button colors */
      intent: {
        cartButton: "bg-slate-400",
        addButton: "bg-[#2a5b45b3] group-hover:bg-[#2a5b45] ",
        greyButton: "bg-[#515051]",
        greenButton: "bg-[#2A5B45]",
        blackButton: "bg-black",
      },

      /* button sizes */
      size: {
        superSmall: "text-lg px-2 py-1",
        small: "p-2",
        medium: "px-6 py-3",
        large: ["text-lg", "py-4", "px-8"],
      },

      /* button roundness */
      roundness: {
        round: "rounded",
        pill: "rounded-full",
      },

      isDisable: {
        disabled: "disabled",
        avaliable: "",
      },
    },

    // defaults
    defaultVariants: {
      intent: "greenButton",
      size: "medium",
      roundness: "round",
    },
  }
);

export default function ButtonCVA({
  intent,
  size,
  isDisable,
  roundness,
  children,
  typeFunction,
  functionParam,
  functionOn,
  linkPath,
}) {
  //   console.log(ButtonCva({ intent, size, roundness }));

  return (
    <div>
      {functionOn ? (
        <button
          onClick={() => typeFunction(functionParam)}
          className={ButtonCva({ intent, size, roundness, isDisable })}
        >
          {children}
        </button>
      ) : (
        <Link href={linkPath}>
          <button className={ButtonCva({ intent, size, roundness })}>
            {children}
          </button>
        </Link>
      )}
    </div>
  );
}

{
  /* <div className='flex gap-8 m-4 border p-3 w-fit'> 
        <Button intent={"primary"} size={"small"}>Boton de prueba 1</Button>
        <Button intent={"secondary"} size={"medium"}>Boton de prueba 2</Button>
        <Button size={"large"} roundness={"pill"}>Boton de prueba 3</Button>
      </div> */
}