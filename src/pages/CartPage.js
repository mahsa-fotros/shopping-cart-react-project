import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../Context/CartProvider";
import "./cartPage.css";
import { BiTrash, BiMinus, BiPlus } from "react-icons/bi";

const CartPage = () => {
  const { cart, total } = useCart();
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
                <div>${item.offPrice * item.quantity}</div>
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
        <CartSummary cart={cart} total={total} />
      </section>
    </main>
  );
};

export default CartPage;

const CartSummary = ({cart, total})=>{
  const originalTotalPrice= cart.length ? cart.reduce((acc,curr)=>acc+curr.quantity*curr.price,0) : 0;
  return (
    <section className="cartSummary">
      <h4>Cart Summary</h4>
      <div className="summaryItem">
        <p>original total price</p>
        <p>${originalTotalPrice}</p>
      </div>
      <div className="summaryItem">
        <p>discount</p>
        <p>${originalTotalPrice - total}</p>
      </div>
      <div className="summaryItem subtotal">
        <p>
          Subtotal ({cart.reduce((acc, curr) => acc + curr.quantity, 0)} items)
        </p>
        <p>${total}</p>
      </div>
      <Link to="/checkout">
      <button className="btn secondary" style={{width:"100%"}}>Proceed to checkout</button>
      </Link>
    </section>
  );
}