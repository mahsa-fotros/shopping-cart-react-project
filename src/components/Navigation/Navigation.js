import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "./logo.jpg"

const items = [
  { name: "Home", to: "/" },
  { name: "cart", to: "/cart" },
  { name: "About us", to: "/about-us" },
];

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <div className="shop-logo">
          <img src={logo} alt="shop cart logo" />
          <h4>Shopcart</h4>
        </div>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={(navData) =>
                    navData.isActive ? "activeLink" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
