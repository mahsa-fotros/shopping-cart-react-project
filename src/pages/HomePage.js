import * as data from "../data";
import "../App.css";
import { useCartActions } from "../Context/CartProvider";

const HomePage = () => {
 const dispatch = useCartActions();
  const addProductHandler=(product)=>{
    dispatch({type:"ADD_TO_CART",payload:product});
  }
  return (
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
                <div>
                  <p>${product.price}</p>
                </div>
              </div>
              <div className="buttonContainer">
                <button onClick={()=>addProductHandler(product)} className="btn primary">Add to Cart</button>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
