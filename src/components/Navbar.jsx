import { useState } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
} from "lucide-react";

import { Link } from "react-router-dom";

function Navbar({
  cartItemCount,
  wishlistCount,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          KIVO<span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Navbar Actions */}
        <div className="nav-actions">

          <button
            className="nav-icon"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <Link
  to="/wishlist"
  className="wishlist-nav-button"
  aria-label={`Wishlist with ${wishlistCount} saved products`}
>
  <Heart size={20} />

  {wishlistCount > 0 && (
    <span className="wishlist-count">
      {wishlistCount}
    </span>
  )}
</Link>

          <button
            className="nav-icon"
            aria-label="Account"
          >
            <User size={20} />
          </button>

          <Link to="/cart" className="cart-button">
            <ShoppingBag size={20} />

            <span>Cart</span>

            <span className="cart-count">
              {cartItemCount}
            </span>
          </Link>

          {/* Mobile Menu */}
         <button
  className="mobile-menu"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
>
  <Menu size={22} />
</button>

        </div>

      </div>
      {menuOpen && (
  <nav className="mobile-nav">

    <Link
      to="/"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </Link>

    <Link
      to="/products"
      onClick={() => setMenuOpen(false)}
    >
      Shop
    </Link>

    <Link
      to="/about"
      onClick={() => setMenuOpen(false)}
    >
      About
    </Link>

    <Link
      to="/contact"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </Link>

    <Link
      to="/wishlist"
      onClick={() => setMenuOpen(false)}
    >
      Wishlist
    </Link>

    <Link
      to="/cart"
      onClick={() => setMenuOpen(false)}
    >
      Cart
    </Link>

  </nav>
)}
    </header>
  );
}

export default Navbar;