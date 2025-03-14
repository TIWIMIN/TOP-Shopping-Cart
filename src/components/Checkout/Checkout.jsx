import { useOutletContext } from "react-router-dom";

import Item from "../Item/Item.jsx";

export default function Checkout() {
  const { items, addToCart, decrementFromCart, removeFromCart } =
    useOutletContext();
  const cart = items.filter((item) => {
    return item.quantity > 0;
  });
  const totalCost = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  return (
    <>
      <p>Checkout</p>
      {cart.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            addToCart={addToCart}
            decrementFromCart={decrementFromCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <h3>Total Cost: {totalCost}</h3>
      <button
        onClick={() => {
          alert("Shipping to you soon!");
        }}
      >
        Pay
      </button>
    </>
  );
}
