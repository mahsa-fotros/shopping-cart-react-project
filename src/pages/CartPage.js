import { useCart } from "../Context/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  const { cart } = useCart();
  if (!cart.length) {
    return (
      <main>
        <h2>Cart is empty!</h2>
      </main>
    );
  }
  return (
    <main className="container">
      <section className="cartCenter">
        <section className="cartItemList">
          {cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <div className="cartItemImage">
                  <img src={item.image} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                <div>${item.price}</div>
                <div className="itemControl">
                  <button>-</button>
                  <p>{item.quantity}</p>
                  <button>+</button>
                </div>
              </div>
            );
          })}
        </section>
        <section className="cartSummary">Cart summary</section>
      </section>
    </main>
  );
};

export default CartPage;
