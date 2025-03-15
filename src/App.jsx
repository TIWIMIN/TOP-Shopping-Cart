import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
          signal,
        });
        const data = await response.json();
        setItems(data.map((item) => ({ ...item, quantity: 0 })));
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
    return () => {
      controller.abort();
    };
  }, []);

  const addToCart = (key) => {
    setItems(
      items.map((item) => {
        return item.id === key
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      })
    );
  };

  const decrementFromCart = (key) => {
    setItems(
      items.map((item) => {
        return item.id === key && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      })
    );
  };

  const removeFromCart = (key) => {
    setItems(
      items.map((item) => {
        return item.id === key
          ? { ...item, quantity: 0 }
          : item;
      })
    );
  };

  return (
    <>
      <p>Hi</p>
      <header>
        <Link to="/">Juiced</Link>
        <nav>
          <Link to="/Shop">Shop</Link>
          <Link to="/Checkout">{totalQuantity}</Link>
        </nav>
      </header>
      <Outlet context={{ items, addToCart, decrementFromCart, removeFromCart }} />
    </>
  );
}

export default App;
