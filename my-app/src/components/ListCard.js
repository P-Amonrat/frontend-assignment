import React from 'react'
import "./index.css"

const ListCard = ({ itemList, handleClickItem }) => {

  return (
    <div className='list-card d-flex flex-column'>
      {itemList.map((item) => (
        <div className='item-list' key={item.name} onClick={() => handleClickItem(item)}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default ListCard