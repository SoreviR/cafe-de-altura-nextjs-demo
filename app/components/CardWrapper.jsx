import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../context/DataContext";

const CardWrapper = () => {
  const { coffeData, loading } = useContext(DataContext);

  const newProductsArray = [
    "Costa Rica Tarrazú",
    "Colombia Los Naranjos",
    "Laos Amanecer",
    "Etiopía Yrgacheff",
  ];

  return (
    <div className="w-[1200px] flex justify-center gap-6">
      {loading && <h2 className="text-4xl">Loading...</h2>}
      {coffeData &&
        newProductsArray.map((product) => {
          const productInfo = coffeData.find((item) => item.brand === product);

          return (
            <ProductCard
              key={productInfo._id}
              productAvailable={productInfo.available}
              productImg={productInfo.img_url}
              productBrand={productInfo.brand}
              productPrice={productInfo.price}
            />
          );
        })}
    </div>
  );
};

export default CardWrapper;
