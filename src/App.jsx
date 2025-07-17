import "./App.css";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import TopSelling from "./Components/TopSelling";
import TopRated from "./Components/TopRated";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Products from "./Components/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./Components/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar cartItems={cartItems} />
          <Home addToCart={addToCart} />
          <Footer />
        </div>
      ),
    },
    {
      path: "/bestSellers",
      element: (
        <div>
          <Navbar cartItems={cartItems} />
          <TopSelling />
          <Footer />
        </div>
      ),
    },
    {
      path: "/products",
      element: (
        <div>
          <Navbar cartItems={cartItems} />
          <Products addToCart={addToCart} />
          <Footer />
        </div>
      ),
    },
    {
      path: "/topPicks",
      element: (
        <div>
          <Navbar cartItems={cartItems} />
          <TopRated />
          <Footer />
        </div>
      ),
    },
    {
      path: "/reviews",
      element: (
        <div>
          <Navbar cartItems={cartItems} />
          <Reviews />
          <Footer />
        </div>
      ),
    },
    {
      path: "/cart",
      element: (
        <div>
          <Navbar cartItems={cartItems} />
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        </div>
      ),
    },
  ]);

  function addToCart(product) {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function increaseQty(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  function decreaseQty(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  }

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
