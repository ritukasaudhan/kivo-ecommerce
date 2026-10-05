import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  cartSubtotal,
}) {
  // Empty cart
  if (cart.length === 0) {
    return (
      <section className="cart-page empty-cart-page">
        <div className="empty-cart">
          <ShoppingBag size={42} />

          <p className="page-eyebrow">YOUR BAG</p>

          <h1>Your cart is empty</h1>

          <p>
            Looks like you haven't added anything to your
            cart yet.
          </p>

          <a href="/products" className="primary-button">
            Explore Products
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">

      {/* Cart Header */}
      <div className="cart-header">
        <div>
          <p className="page-eyebrow">YOUR BAG</p>

          <h1>Shopping Cart</h1>
        </div>

        <p>
          {cart.length} product{cart.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Cart Content */}
      <div className="cart-content">

        {/* Cart Items */}
        <div className="cart-items">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              {/* Product Information */}
              <div className="cart-item-info">

                <p className="product-category">
                  {item.category}
                </p>

                <h2>{item.name}</h2>

                <p className="cart-item-price">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>

              </div>

              {/* Quantity Controls */}
              <div className="quantity-control">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <Minus size={15} />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  <Plus size={15} />
                </button>

              </div>

              {/* Item Total */}
              <div className="cart-item-total">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </div>

              {/* Remove */}
              <button
                className="remove-item-button"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                <Trash2 size={17} />
              </button>

            </div>
          ))}

        </div>

        {/* Order Summary */}
        <aside className="cart-summary">

          <p className="page-eyebrow">
            ORDER SUMMARY
          </p>

          <h2>Your Order</h2>

          <div className="summary-row">
            <span>Subtotal</span>

            <strong>
              ₹{cartSubtotal.toLocaleString("en-IN")}
            </strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <strong>Free</strong>
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <span>Total</span>

            <strong>
              ₹{cartSubtotal.toLocaleString("en-IN")}
            </strong>
          </div>

          <button className="checkout-button">
            Proceed to Checkout
          </button>

        </aside>

      </div>

    </section>
  );
}

export default Cart;