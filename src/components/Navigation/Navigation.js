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
        <div className="shop-logo">
          <img src={logo} alt="shop cart logo" />
          <h4>MahsaShop</h4>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "activeLink" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink
              to="/cart"
              className={(navData) => (navData.isActive ? "activeLink" : "")}
            >
              {<BsCart />}
            </NavLink>
            <span className="cartLength">{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
