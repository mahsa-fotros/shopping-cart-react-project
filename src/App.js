import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer />
          <Routes>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            ))}
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
