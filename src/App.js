import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <CartProvider>
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
