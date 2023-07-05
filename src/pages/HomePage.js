import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products/categories")
  //     .then((res) => setCategories(res.data));
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setProducts(res.data));
  // }, []);
  useEffect(() => {
    Promise.all([
      axios.get("https://fakestoreapi.com/products/categories"),
      axios.get("https://fakestoreapi.com/products"),
    ])
      .then(([categoriesResponse, productsResponse]) => {
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="productList categoryList">
        {categories.map((category) => {
          const product = products.filter((p) => p.category === category);
          return (
            <Link to={`/products/category/${category.split(" ").join("-")}`} key={categories.indexOf(category)}>
              <div className="product">
                <div className="productImage">
                  <img src={product[2].image} alt={product[2].title} />
                </div>
                <div className="categoryName">{category}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};
  export default HomePage;

  
