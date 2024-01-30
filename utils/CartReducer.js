const cartReducer = (cartState, dispatch) => {
  switch (dispatch.action) {
    case "add_product":
      const cartProductIndex = cartState.findIndex(
        (product) => product.brand === dispatch.product.brand
      );

      if (cartProductIndex >= 0) {
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

    case "remove_product":
      const cartProductIndexRemove = cartState.findIndex(
        (product) => product.brand === dispatch.product.brand
      );

      const newCartStateRemove = structuredClone(cartState);
      newCartStateRemove[cartProductIndexRemove].quantity -= 1;

      if (newCartStateRemove[cartProductIndexRemove].quantity == 0) {
        newCartStateRemove.splice(cartProductIndexRemove, 1);
      }
      return newCartStateRemove;

    case "clear_cart":
      return [];
    default:
      return cart;
  }
};

export default cartReducer;
