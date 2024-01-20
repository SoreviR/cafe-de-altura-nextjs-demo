"use client";
import cartReducer from "@/utils/cartReducer";
import React, { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext([]);

export default function DataContextProvider({ children }) {
  const [coffeData, setCoffeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalCart, setModalCart] = useState(false);

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

  // console.log(coffeData);
  const addProduct = (product) => {
    dispatch({
      action: "add_product",
      product: product,
    });
    console.log("Se apreto el boton ADD");
  };

  const [cartState, dispatch] = useReducer(cartReducer, []);

  return (
    <DataContext.Provider
      value={{
        coffeData,
        loading,
        dispatch,
        addProduct,
        cartState,
        modalCart,
        setModalCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
