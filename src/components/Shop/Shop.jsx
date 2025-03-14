import { useOutletContext } from "react-router-dom";
import Item from "../Item/Item";

export default function Shop() {

  const { items, addToCart, decrementFromCart, removeFromCart } = useOutletContext();
  console.log(items);  

  return (
    <>
      <h2>Shop</h2>
      <main>
        {items.map((item) => {
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
      </main>
    </>
  );
}
