import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../context/DataContext";

const ShopSection = () => {
  const { coffeData, loading } = useContext(DataContext);

  const productsArray = [
    "Costa Rica Tarrazú",
    "Colombia Los Naranjos",
    "Laos Amanecer",
    "Etiopía Yrgacheff",
    "Kenia Ndunduri",
    "Etiopía Sidamo",
    "Costa Rica Monte Bello",
    "Colombia La Casita",
  ];
  return (
    <section className="flex flex-col items-center p-10 gap-6">
      <h2 className="text-2xl font-medium leading-7 text-[#2A5B45]">
        Ultimos origenes
      </h2>

      <div className="w-[1200px] flex flex-wrap justify-center gap-6">
        {loading && <h2>Loading...</h2>}
        {coffeData &&
          productsArray.map((product, i) => {
            const productInfo = coffeData.find(
              (item) => item.brand === product
            );

            return (
              <ProductCard
                key={i}
                productAvailable={productInfo.available}
                productImg={productInfo.img_url}
                productBrand={productInfo.brand}
                productPrice={productInfo.price}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ShopSection;
