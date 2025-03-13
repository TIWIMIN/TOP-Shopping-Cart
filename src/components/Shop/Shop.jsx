import { useState, useEffect } from "react";

export default function Shop() {
    const [items, setItems] = useState([]); 

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
        console.log(data);
        setItems(data); 
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
    return () => {
        controller.abort(); 
    }
  }, []);

  return (
    <>
      <p>Shop</p>
    </>
  );
}
