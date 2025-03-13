import { Outlet, Link } from "react-router-dom"; 

import Home from "./components/Home/Home";

function App() {
  return <>
    <header>
      <Link to="/">Juiced</Link>
      <nav>
        <Link to="/Shop">Shop</Link>
        <Link to="/Checkout"></Link>
      </nav>
    </header>
    <Outlet />
  </>;
}

export default App;
