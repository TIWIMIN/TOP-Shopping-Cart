export default function Item({
  id,
  title,
  image,
  price,
  quantity, 
  addToCart,
  decrementFromCart, 
  removeFromCart,
}) {
  return (
    <div>
      {title}
      {price}
      <img src={image} alt={title} />
      <button onClick={() => addToCart(id)}>Up</button>
      <div>{quantity}</div>
      <button onClick={() => decrementFromCart(id)}>Down</button>
      <button onClick={() => removeFromCart(id)}>Delete</button>
    </div>
  );
}
