import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome To Juiced</h1>
      <Link to="/Shop">
        <button>Go To Shop</button>
      </Link>
    </>
  );
}
