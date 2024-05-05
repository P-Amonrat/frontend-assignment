import React from 'react'

const FruitsCard = ({ selectedItem, handleClickItem }) => {
  return (
    <div className='fruits-card'>
      <div className='header'>
        <p>Fruits</p>
      </div>
      {selectedItem.filter((list) => list.type === "Fruit")
        .map((item) => (
          <div className='body-list' key={item.name} onClick={() => handleClickItem(item)}>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  )
}

export default FruitsCard