import { useCart, useCartActions } from "../Context/CartProvider";
import "./cartPage.css";
import { BiTrash, BiMinus, BiPlus } from "react-icons/bi";

const CartPage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  if (!cart.length) {
    return (
      <main className="emptyCart">
        <h2>Cart is empty!</h2>
      </main>
    );
  }
  const incrementHandler=(cartItem)=>{
    dispatch({type:"ADD_TO_CART", payload:cartItem});
  }
  const decrementHandler=(cartItem)=>{
    dispatch({ type: "DECREMENT_PRODUCT", payload:cartItem });
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
                <div>${item.price * item.quantity}</div>
                <div
                  className="itemControl"
                >
                  <button
                    onClick={() => decrementHandler(item)}
                    className={`itemControlBtn ${item.quantity === 1 && "remove"}`}
                  >
                    {item.quantity > 1 ? <BiMinus /> : <BiTrash />}
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => incrementHandler(item)} className="itemControlBtn">{<BiPlus />}</button>
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
