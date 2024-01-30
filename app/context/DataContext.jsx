"use client";
import cartReducer from "@/utils/CartReducer";

import React, { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext([]);

export default function DataContextProvider({ children }) {
  const [coffeData, setCoffeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalCartBool, setModalCartBool] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isSuccessPage, setIsSuccessPage] = useState(false);

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
    setIsSuccessPage(false);
  }, []);

  const addProduct = (product) => {
    dispatch({
      action: "add_product",
      product: product,
    });
  };

  const removeProduct = (product) => {
    dispatch({
      action: "remove_product",
      product: product,
    });
  };

  const clearCart = () => {
    dispatch({
      action: "clear_cart",
    });
  };

  const [cartState, dispatch] = useReducer(cartReducer, []);

  const bagTotalProducts = cartState.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

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
        bagTotalProducts,
        isSuccessPage,
        setIsSuccessPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
