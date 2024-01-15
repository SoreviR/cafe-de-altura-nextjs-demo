"use client";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext([]);

export default function DataContextProvider({ children }) {
  const [coffeData, setCoffeData] = useState(null);
  const [loading, setLoading] = useState(true);

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
  return (
    <DataContext.Provider value={{ coffeData, loading }}>
      {children}
    </DataContext.Provider>
  );
}
