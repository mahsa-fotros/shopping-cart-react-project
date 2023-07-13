import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useCart, useCartActions } from "../Context/CartProvider";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";
import axios from "axios";
import { checkInCart } from "../utils/checkInCart";
import "../App.css";
import Aside from "../components/Aside/Aside";

const SingleCategoryPage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const addProductHandler = (product) => {
    toast.success(
      `${product.title.split(" ").slice(0, 2).join(" ")} is added to cart !`,
      { autoClose: 1500 }
    );
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const params = useParams();
  const location = useLocation();
  const category = params.categoryName.split("-").join(" ");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => setProductList(res.data));
  }, [location, category]);

  useEffect(() => {
    setFilteredProductList(productList);
  }, [productList]);
  
  const handlePriceRangeChange = (event, newRange) => {
    const [minPrice, maxPrice] = newRange;
    const filteredProducts = productList.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProductList(filteredProducts);
  };

  return (
    <Layout>
      <div className="contentContainer">
        <Aside
          selectedCategory={category}
          onPriceRangeChange={handlePriceRangeChange}
        />
        <main>
          <section className="productList">
            {filteredProductList.map((product) => {
              return (
                <section className="product" key={product.id}>
                  <div className="productImage">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="productDesc">
                    <div>{product.title.split(" ").slice(0, 2).join(" ")}</div>
                    <div className="productPrice">
                      <p>${product.price}</p>
                      {/* <p className="originalPrice">
                      {product.discount > 0 ? <>List: ${product.price}</> : ""}
                    </p> */}
                    </div>
                  </div>
                  <div className="buttonContainer">
                    <button
                      onClick={() => addProductHandler(product)}
                      className={`btn primary ${
                        checkInCart(cart, product) && "third"
                      }`}
                    >
                      {checkInCart(cart, product) ? "In Cart" : "Add to Cart"}
                    </button>
                  </div>
                </section>
              );
            })}
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default SingleCategoryPage;
