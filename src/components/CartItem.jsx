import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  updateQuantity,
  removeItem,
} from '../redux/CartSlice.jsx'

const CartItem = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const totalCount = useSelector(selectCartCount)
  const totalCost = useSelector(selectCartTotal)

  const handleCheckout = () => {
    alert('Coming Soon')
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to get started!</p>
            <Link to="/products">
              <button className="continue-btn" style={{ marginTop: '20px' }}>
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <h2>Total Plants: {totalCount}</h2>
              <h2>Total Cost: ${totalCost}</h2>
            </div>

            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="unit-price">Unit Price: ${item.price}</p>
                  <p className="line-total">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>

                <div className="qty-controls">
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, amount: -1 }))
                    }
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, amount: 1 }))
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            ))}

            <div className="cart-actions">
              <Link to="/products">
                <button className="continue-btn">Continue Shopping</button>
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartItem
