import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  // Load cart from Local Storage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("kivo-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
  const savedWishlist = localStorage.getItem("kivo-wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
});

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("kivo-cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
  localStorage.setItem(
    "kivo-wishlist",
    JSON.stringify(wishlist)
  );
}, [wishlist]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };
const toggleWishlist = (product) => {
  setWishlist((currentWishlist) => {
    const alreadyLiked = currentWishlist.some(
      (item) => item.id === product.id
    );

    if (alreadyLiked) {
      return currentWishlist.filter(
        (item) => item.id !== product.id
      );
    }

    return [...currentWishlist, product];
  });
};

  // Increase quantity
  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product completely
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // Total number of products in cart
  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const wishlistCount = wishlist.length;

  // Calculate subtotal
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <Navbar
  cartItemCount={cartItemCount}
  wishlistCount={wishlistCount}
/>

      <main>
        <Routes>
         <Route
  path="/"
  element={
    <Home
      addToCart={addToCart}
      toggleWishlist={toggleWishlist}
      wishlist={wishlist}
    />
  }
/>

          <Route
  path="/products"
  element={
    <Products
      addToCart={addToCart}
      toggleWishlist={toggleWishlist}
      wishlist={wishlist}
    />
  }
/>

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
                cartSubtotal={cartSubtotal}
              />
            }
          />
          <Route
  path="/wishlist"
  element={
    <Wishlist
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
      addToCart={addToCart}
    />
  }
/>
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;