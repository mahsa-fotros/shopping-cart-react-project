import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";
import "./aside.css"

const Aside = ({ selectedCategory, onPriceRangeChange }) => {
  const [categories, setCategories] = useState([]);
  const [range, setRange] = useState([0, 1000]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

const handlePriceRangeChange = (event, newRange) => {
  const rangeArray = Array.isArray(newRange) ? newRange : [newRange, newRange];
  setRange(rangeArray);
  onPriceRangeChange(event, rangeArray); // Call the parent function to filter products
};
useEffect(() => {
  setRange([0, 1000]);
}, [selectedCategory]);
  return (
    <aside className="asideContainer">
      <ul className="category__items sidebar__card">
        <h4 className="card__title">Category</h4>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/products/category/${category.split(" ").join("-")}`}
              className={`categoryLinks ${
                category === selectedCategory && "selectedLink"
              }`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sidebar__range sidebar__card">
        <h4 className="card__title">Price Range</h4>
        <Slider
          getAriaLabel={() => "price range"}
          value={range}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
        />
      </div>
    </aside>
  );
};

export default Aside;
