import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./aside.css"

const Aside = ({selectedCategory}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <aside className="asideContainer">
      <ul className="category__items sidebar__card">
        <h4>Category</h4>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/products/category/${category.split(" ").join("-")}`} className={`categoryLinks ${category===selectedCategory && "selectedLink"}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
