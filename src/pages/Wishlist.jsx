import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function Wishlist({
  wishlist,
  toggleWishlist,
  addToCart,
}) {
  if (wishlist.length === 0) {
    return (
      <section className="wishlist-page empty-wishlist-page">
        <div className="empty-wishlist">

          <Heart size={42} />

          <p className="page-eyebrow">
            YOUR WISHLIST
          </p>

          <h1>Your wishlist is empty</h1>

          <p>
            Save products you love and come back to them
            whenever you want.
          </p>

          <Link
            to="/products"
            className="primary-button"
          >
            Explore Products
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-page">

      {/* Header */}
      <div className="wishlist-header">

        <div>
          <p className="page-eyebrow">
            YOUR WISHLIST
          </p>

          <h1>Saved Products</h1>
        </div>

        <p>
          {wishlist.length} product
          {wishlist.length !== 1 ? "s" : ""}
        </p>

      </div>

      {/* Wishlist Grid */}
      <div className="wishlist-grid">

        {wishlist.map((product) => (
          <article
            className="wishlist-card"
            key={product.id}
          >

            {/* Image */}
            <div className="wishlist-image-wrapper">

              <img
                src={product.image}
                alt={product.name}
                className="wishlist-image"
              />

              <button
                className="wishlist-remove"
                onClick={() =>
                  toggleWishlist(product)
                }
                aria-label={`Remove ${product.name} from wishlist`}
              >
                <Trash2 size={17} />
              </button>

            </div>

            {/* Information */}
            <div className="wishlist-info">

              <p className="product-category">
                {product.category}
              </p>

              <h2>{product.name}</h2>

              <div className="wishlist-bottom">

                <strong>
                  ₹{product.price.toLocaleString("en-IN")}
                </strong>

                <button
                  className="wishlist-cart-button"
                  onClick={() =>
                    addToCart(product)
                  }
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Wishlist;