import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";




const routes=[
    {path:"/", element:HomePage},
    {path:"/cart", element: CartPage },
    {path:"/checkout", element: CheckoutPage}
];

export default routes;