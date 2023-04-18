import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";




const routes=[
    {path:"/", element:HomePage},
    {path:"/cart", element: CartPage },
    {path:"/checkout", element: CheckoutPage},
    {path:"/login", element: Login},
    {path:"/signup", element: Signup}
];

export default routes;