import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/CartSlice.jsx'

const Navbar = () => {
  const cartCount = useSelector(selectCartCount)

  return (
    <nav className="navbar">
      <div className="logo">Paradise Nursery</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Plants</Link></li>
        <li>
          <Link to="/cart" className="cart-icon">
            🛒
            <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
