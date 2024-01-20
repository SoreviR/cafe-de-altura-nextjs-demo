import Image from "next/image";

const CartModalRow = ({ cartProducts }) => {
  return (
    <div className="flex flex-col gap-2 boder-white border p-2 rounded">
      {cartProducts.map((product, i) => {
        return (
          <div key={i} className="flex justify-between">
            <div className="flex justify-between gap-4">
              <button>+</button>
              <div>IMG</div>
              {/* <Image src={product.img_url} alt="product" /> */}
              <button>-</button>
            </div>

            <p>{product.brand}</p>
            <p>{product.price.toFixed(2)} €</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartModalRow;
