import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartProvider";
import Layout from "../../Layout/Layout";
import "./checkout.css";

const Checkout = () => {
  
  const { cart, total } = useCart();
  const originalTotalPrice= cart.length ? cart.reduce((acc,curr)=>acc+curr.quantity*curr.price ,0) : 0;
if(!cart.length) return (
  <Layout>
    <main className="emptyCheckout">
      <Link to="/">
      <h2>go shopping?</h2>
      </Link>
    </main>
  </Layout>
);
  return (
    <Layout>
      <main className="container">
        <section className="checkoutDetail">
          <h4>Your order</h4>
          <section className="checkoutList">
            {cart.map((item) => {
              return (
                <div className="checkoutItem" key={item.id}>
                  <div className="itemImage">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="itemQuantity">{item.quantity}</div>
                </div>
              );
            })}
          </section>
        </section>
        <section className="billDetail">
          <h4>Your bill</h4>
          <div className="billItem">
            <p>Total price</p>
            <p>${originalTotalPrice}</p>
          </div>
          <div className="billItem">
            <p>Shipping cost</p>
            <p>${total * 0.01}</p>
          </div>
          <div className="billItem">
            <p>Your profit</p>
            <p>${originalTotalPrice - total}</p>
          </div>
          <div className="billItem">
            <p>
              Subtotal ({cart.reduce((acc, curr) => acc + curr.quantity, 0)}{" "}
              items)
            </p>
            <p>${total}</p>
          </div>
            <button className="btn third" style={{ width: "100%" }}>
              Pay off
            </button>
        </section>
      </main>
    </Layout>
  );
};

export default Checkout;
