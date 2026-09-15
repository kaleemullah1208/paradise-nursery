import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AboutUs from './components/AboutUs.jsx'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <AboutUs />
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  )
}

export default App
