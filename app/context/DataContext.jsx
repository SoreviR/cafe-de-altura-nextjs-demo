"use client";
import cartReducer from "@/utils/CartReducer";
import React, { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext([]);

export default function DataContextProvider({ children }) {
  const [coffeData, setCoffeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalCartBool, setModalCartBool] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://cafe-de-altura.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => {
        setCoffeData(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  const addProduct = (product) => {
    dispatch({
      action: "add_product",
      product: product,
    });
    console.log("Se apreto el boton ADD");
  };

  const removeProduct = (product) => {
    dispatch({
      action: "remove_product",
      product: product,
    });
    console.log("Se apreto el boton Remove");
  };

  const clearCart = () => {
    dispatch({
      action: "clear_cart",
      // product: product,
    });
    console.log("Se apreto el boton Clear");
  };

  const [cartState, dispatch] = useReducer(cartReducer, []);

  return (
    <DataContext.Provider
      value={{
        coffeData,
        loading,
        dispatch,
        addProduct,
        removeProduct,
        clearCart,
        cartState,
        modalCartBool,
        setModalCartBool,
        isChecked,
        setIsChecked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
