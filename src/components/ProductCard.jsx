import { Heart, ShoppingBag, Star } from "lucide-react";

function ProductCard({
  product,
  addToCart,
  toggleWishlist,
  wishlist,
}) {
  const {
    name,
    category,
    price,
    originalPrice,
    rating,
    reviews,
    image,
    badge,
  } = product;

  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-image-wrapper">

        <img
          src={image}
          alt={name}
          className="product-image"
        />

        {badge && (
          <span className="product-badge">
            {badge}
          </span>
        )}

        <button
  className={`wishlist-button ${
    wishlist?.some((item) => item.id === product.id)
      ? "wishlist-active"
      : ""
  }`}
  onClick={() => toggleWishlist(product)}
  aria-label={`${
    wishlist?.some((item) => item.id === product.id)
      ? "Remove"
      : "Add"
  } ${name} ${wishlist?.some((item) => item.id === product.id) ? "from" : "to"} wishlist`}
>
  <Heart
    size={18}
    fill={
      wishlist?.some((item) => item.id === product.id)
        ? "currentColor"
        : "none"
    }
  />
</button>

      </div>

      {/* Product Information */}
      <div className="product-info">

        <p className="product-category">
          {category}
        </p>

        <h3 className="product-name">
          {name}
        </h3>

        {/* Rating */}
        <div className="product-rating">

          <div className="stars">
            <Star size={14} fill="currentColor" />

            <span>{rating}</span>
          </div>

          <span className="review-count">
            ({reviews})
          </span>

        </div>

        {/* Price */}
        <div className="product-price">

          <span className="current-price">
            ₹{price.toLocaleString("en-IN")}
          </span>

          {originalPrice && (
            <span className="original-price">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
          )}

        </div>

        {/* Add to Cart */}
        <button
  className="add-to-cart-button"
  onClick={() => addToCart(product)}
>
  <ShoppingBag size={17} />
  Add to Cart
</button>

      </div>

    </article>
  );
}

export default ProductCard;