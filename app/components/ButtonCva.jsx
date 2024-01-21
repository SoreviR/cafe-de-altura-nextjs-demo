import React from "react";
import { cva } from "class-variance-authority";
//class-variance-authority: library

const ButtonCva = cva(
  /* button base style */
  "h-auto text-white uppercase transition-colors duration-150",
  {
    variants: {
      /* button colors */
      intent: {
        primary: "bg-green-500 hover:bg-green-600",
        secondary: "bg-red-500 hover:bg-red-600",
        default: "bg-gray-500 hover:bg-gray-600",
      },

      /* button sizes */
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["text-lg", "py-4", "px-8"],
      },

      /* button roundness */
      roundness: {
        square: "rounded-none",
        round: "rounded-md",
        pill: "rounded-full",
      },

      //function type
    },

    // defaults
    defaultVariants: {
      intent: "default",
      size: "medium",
      roundness: "round",
    },
  }
);

export default function ButtonCVA({ intent, size, roundness, children }) {
  console.log(ButtonCva({ intent, size, roundness }));

  return (
    <button className={ButtonCva({ intent, size, roundness })}>
      {children}
    </button>
  );
}

{
  /* <div className='flex gap-8 m-4 border p-3 w-fit'> 
        <Button intent={"primary"} size={"small"}>Boton de prueba 1</Button>
        <Button intent={"secondary"} size={"medium"}>Boton de prueba 2</Button>
        <Button size={"large"} roundness={"pill"}>Boton de prueba 3</Button>
      </div> */
}
