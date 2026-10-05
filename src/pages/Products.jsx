import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({
  addToCart,
  toggleWishlist,
  wishlist,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, category, sortBy]);

  return (
    <section className="products-page">

      {/* Page Header */}
      <div className="products-header">

        <div>
          <p className="page-eyebrow">THE KIVO COLLECTION</p>

          <h1>Shop all products</h1>

          <p className="products-description">
            Explore our curated collection of everyday essentials,
            technology, accessories, and lifestyle products.
          </p>
        </div>

        <p className="products-count">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>

      </div>

      {/* Toolbar */}
      <div className="products-toolbar">

        {/* Search */}
        <div className="product-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

        </div>

        {/* Categories */}
        <div className="category-filter">

          <SlidersHorizontal size={17} />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Sorting */}
        <select
          className="sort-select"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>

      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">

          {filteredProducts.map((product) => (
           <ProductCard
  key={product.id}
  product={product}
  addToCart={addToCart}
  toggleWishlist={toggleWishlist}
  wishlist={wishlist}
/>
          ))}

        </div>
      ) : (
        <div className="no-products">
          <h2>No products found</h2>

          <p>
            Try searching for something else or choose a
            different category.
          </p>
        </div>
      )}

    </section>
  );
}

export default Products;