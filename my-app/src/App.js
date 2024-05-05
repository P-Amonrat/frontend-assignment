import { useEffect, useState } from 'react';
import './App.css';
import FruitsCard from './components/FruitsCard';
import ListCard from './components/ListCard';
import { list } from './components/MockData';
import Vegetable from './components/Vegetable';

function App() {
  const [selectedItem, setSelectedItem] = useState([])
  const [itemList, setItemList] = useState(list)

  const handleClickItem = (item) => {
    const checkItem = selectedItem.findIndex((selected) => selected.name === item.name)

    if (checkItem === -1) {
      setSelectedItem([...selectedItem, { ...item, time: 5 }])
      setItemList(itemList.filter((listItem) => listItem.name !== item.name))
    } else {
      setSelectedItem(selectedItem.filter((_, index) => index !== checkItem))
      setItemList([...itemList, item])
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      selectedItem.map(item => {
        if (item.time === 0) {
          const [items, ...rest] = selectedItem
          setSelectedItem(rest)
          setItemList([...itemList, items])
        } else {
          item.time -= 1
        }
      })
    }, 1000);

    return () => clearInterval(interval);

  }, [selectedItem]);

  return (
    <div className="App">
      <ListCard itemList={itemList} handleClickItem={handleClickItem} />
      <FruitsCard selectedItem={selectedItem} handleClickItem={handleClickItem} />
      <Vegetable selectedItem={selectedItem} handleClickItem={handleClickItem} />
    </div>
  );
}

export default App;
