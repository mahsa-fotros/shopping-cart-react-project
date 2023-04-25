import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "./logo.jpg";
import { BsCart } from "react-icons/bs";
import { useCart } from "../../Context/CartProvider";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div className="shop-logo">
            <img src={logo} alt="shop cart logo" />
            <h4>MahsaShop</h4>
          </div>
          <li>
            <NavLink
              to="/"
              className={`hoverLink ${(navData) =>
                navData.isActive ? "activeLink" : ""}`}
            >
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="cartLink">
            <NavLink
              to="/cart"
              className={`hoverLink ${(navData) =>
                navData.isActive ? "activeLink" : ""}`}
            >
              {<BsCart />}
            </NavLink>
            <span className="cartLength">
              {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
            </span>
          </li>
          <li>
            <NavLink to="/login">
              <button className="btn secondary" style={{ marginBottom: "0" }}>
                Log in
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">
              <button className="btn primary" style={{ marginBottom: "0" }}>
                Sign up
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
