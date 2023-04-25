import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "./logo.jpg";
import { BsCart } from "react-icons/bs";
import { useCart } from "../../Context/CartProvider";
import { useAuth } from "../../Context/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Navigation = () => {
  const userData = useAuth();
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
            <NavLink to={userData ? "/profile" : "login"}>
              <button
                className={`btn primary ${userData && "profile"}`}
                style={{ marginBottom: "0" }}
              >
                {userData ? <FaUserAlt /> : "Log in"}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">
              <button
                className={`btn secondary ${userData && "btnNotShown"}`}
                style={{ marginBottom: "0" }}
              >
                {userData ? "" : "Sign up"}
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
