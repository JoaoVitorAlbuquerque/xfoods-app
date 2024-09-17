import { CartItem } from "../../../../types/CartItem";

export function useCartController(cartItem: CartItem[]) {
  const total = cartItem.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return {
    total,
  };
}
