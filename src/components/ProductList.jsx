import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './Navbar.jsx'
import { addItem } from '../redux/CartSlice.jsx'

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        id: 1,
        name: 'Snake Plant',
        price: 15,
        image:
          'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 2,
        name: 'Spider Plant',
        price: 12,
        image:
          'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      {
        id: 3,
        name: 'Aloe Vera',
        price: 10,
        image:
          'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 4,
        name: 'Jade Plant',
        price: 14,
        image:
          'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      {
        id: 5,
        name: 'Peace Lily',
        price: 18,
        image:
          'https://images.unsplash.com/photo-1593691509543-c55fb32e5ce0?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 6,
        name: 'Anthurium',
        price: 20,
        image:
          'https://images.unsplash.com/photo-1616500163210-8c1d5c8d9f4c?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
]

const ProductList = () => {
  const dispatch = useDispatch()
  const [added, setAdded] = useState({})

  const handleAdd = (plant) => {
    dispatch(addItem(plant))
    setAdded((prev) => ({ ...prev, [plant.id]: true }))
  }

  return (
    <>
      <Navbar />
      <div className="products-page">
        <h1>Our Houseplants</h1>
        {plantsData.map((group) => (
          <div key={group.category}>
            <h2 className="category-title">{group.category}</h2>
            <div className="products-grid">
              {group.plants.map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price}</p>
                  <button
                    className="add-btn"
                    onClick={() => handleAdd(plant)}
                    disabled={!!added[plant.id]}
                  >
                    {added[plant.id] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList
