import ProductGrid from "../components/ProductGrid";
function Home({
  addToCart,
  toggleWishlist,
  wishlist,
}) {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">

          <p className="hero-eyebrow">
            NEW SEASON • 2026 COLLECTION
          </p>

          <h1>
            Everything you need.
            <span> All in one place.</span>
          </h1>

          <p className="hero-description">
            Discover thoughtfully selected products designed to fit
            your everyday lifestyle. Shop smarter, live better.
          </p>

          <div className="hero-actions">
            <a href="/products" className="primary-button">
              Shop Collection
            </a>

            <a href="/about" className="secondary-button">
              Explore Kivo
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <span>01</span>
            <p>Curated essentials</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-heading">
          <p>EXPLORE</p>
          <h2>Shop by category</h2>
        </div>

        <div className="category-grid">

          <div className="category-card">
            <span>01</span>
            <h3>Fashion</h3>
            <p>Everyday essentials</p>
          </div>

          <div className="category-card">
            <span>02</span>
            <h3>Electronics</h3>
            <p>Smart technology</p>
          </div>

          <div className="category-card">
            <span>03</span>
            <h3>Accessories</h3>
            <p>Complete your style</p>
          </div>

          <div className="category-card">
            <span>04</span>
            <h3>Home & Living</h3>
            <p>Designed for comfort</p>
          </div>

        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="featured-section">
        <div className="section-heading">
          <p>CURATED FOR YOU</p>
          <h2>Featured products</h2>
        </div>

        <ProductGrid
  addToCart={addToCart}
  toggleWishlist={toggleWishlist}
  wishlist={wishlist}
/>
      </section>

    </div>
  );
}

export default Home;