import * as data from "../data";
import "../App.css";

const HomePage = () => {
  return (
    <main>
      <section className="productList">
        {data.products.map((product) => {
          return (
            <section className="product">
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
                <button className="btn primary">Add to Cart</button>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
