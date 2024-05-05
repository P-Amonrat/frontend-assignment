import React from 'react'
import "./index.css"

const Vegetable = ({ selectedItem, handleClickItem }) => {
  return (
    <div className='vegetable-card'>
      <div className='header'>
        <p>Vegetable</p>
      </div>
      {selectedItem.filter((list) => list.type === "Vegetable")
        .map((item) => (
          <div className='body-list' key={item.name} onClick={() => handleClickItem(item)}>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  )
}

export default Vegetable