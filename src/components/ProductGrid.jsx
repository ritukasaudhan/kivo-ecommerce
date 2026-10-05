import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductGrid({
  addToCart,
  toggleWishlist,
  wishlist,
}) {
  return (
    <div className="product-grid">
      {products.map((product) => (
      <ProductCard
  key={product.id}
  product={product}
  addToCart={addToCart}
  toggleWishlist={toggleWishlist}
  wishlist={wishlist}
/>
      ))}
    </div>
  );
}

export default ProductGrid;