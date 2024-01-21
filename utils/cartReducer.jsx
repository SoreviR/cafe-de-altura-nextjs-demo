const cartReducer = (cartState, dispatch) => {
  switch (dispatch.action) {
    case "add_product":
      const cartProductIndex = cartState.findIndex(
        (product) => product.brand === dispatch.product.brand
      );

      if (cartProductIndex >= 0) {
        // dispatch.product.quantity = 1;

        const newCartState = structuredClone(cartState);
        newCartState[cartProductIndex].quantity += 1;
        return newCartState;
      }

      return [
        ...cartState,
        {
          ...dispatch.product,
          quantity: 1,
        },
      ];

    case "delete_product":
      return cartState.filter((item) => item.id !== dispatch.product);

    case "clear_cart":
      return [];
    default:
      return cart;
  }
};

export default cartReducer;
