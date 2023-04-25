import * as data from "../data";
import "../App.css";
import { useCart, useCartActions } from "../Context/CartProvider";
import { checkInCart } from "../utils/checkInCart";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";

const HomePage = () => {
  const {cart} = useCart();
 const dispatch = useCartActions();
  const addProductHandler=(product)=>{
    toast.success(`${product.name} is added to cart !`)
    dispatch({type:"ADD_TO_CART",payload:product});
  }
  return (
    <Layout>
      <main>
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="productImage">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productDesc">
                  <div>{product.name}</div>
                  <div className="productPrice">
                    <p>${product.offPrice}</p>
                    <p className="originalPrice">
                      {product.discount > 0 ? <>List: ${product.price}</> : ""}
                    </p>
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
    </Layout>
  );
};

export default HomePage;
