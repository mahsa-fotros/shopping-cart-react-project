import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Signup from "./pages/SignupPage";
import singleCategoryPage from "./pages/SingleCategoryPage";




const routes=[
    {path:"/", element:HomePage},
    {path:"/products/category/:categoryName", element:singleCategoryPage},
    {path:"/cart", element: CartPage },
    {path:"/checkout", element: CheckoutPage},
    {path:"/login", element: Login},
    {path:"/signup", element: Signup},
    {path:"/profile", element: ProfilePage}
];

export default routes;