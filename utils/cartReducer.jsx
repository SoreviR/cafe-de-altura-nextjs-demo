const cartReducer = (cartState, dispatch) => {
  // console.log("State es: " + cartState);
  switch (dispatch.action) {
    case "add_product":
      console.log("dispatch es: " + dispatch.product.brand);
      console.log(cartState);
      console.log(cartState[0]);

      //   console.log(
      //     "esta adentro? " + cartState.includes(dispatch.product.brand)
      //   );
      //   const i = cartState.findIndex((e) => e.brand === dispatch.product.brand);
      //   cartState.includes(dispatch.product.brand)

      if (
        !cartState.find((item) => {
          item.brand === dispatch.product.brand;
        })
      ) {
        /* vendors contains the element we're looking for, at index "i" */
        dispatch.product.quantity = 1;
        console.log("Entro en IF");
        return [
          ...cartState,
          dispatch.product,
          //   {
          //     brand: dispatch.product.brand,
          //     price: dispatch.product.price,
          //     quantity: dispatch.product.quantity,
          //     img: dispatch.product.img_url,
          //   },
        ];
      } else {
        // productIndex.quantity += 1;
        console.log("esto es en el ELSE" + cartState);

        return [...cartState, (dispatch.product.quantity += 1)];
      }

    case "delete_product":
      return cartState.filter((item) => item.id !== dispatch.product);

    default:
      return cart;
  }
};

export default cartReducer;
