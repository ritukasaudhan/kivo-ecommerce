import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            KIVO<span>.</span>
          </Link>

          <p>
            A modern shopping experience built around
            quality, simplicity, and thoughtful design.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Customer */}
        <div className="footer-column">
          <h3>Customer Care</h3>

          <Link to="/contact">Contact Support</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/products">All Products</Link>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Stay in the loop</h3>

          <p>
            Get updates about new products and collections.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />

            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Kivo. All rights reserved.</p>

        <p>Built with React + Vite</p>
      </div>
    </footer>
  );
}

export default Footer;