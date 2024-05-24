import { useState } from 'react';
import './App.css';
import FruitsCard from './components/FruitsCard';
import ListCard from './components/ListCard';
import { list } from './components/MockData';
import Vegetable from './components/Vegetable';

function App() {
  const [selectedItem, setSelectedItem] = useState([])
  const [itemList, setItemList] = useState(list)

  const handleClickItem = (item) => {
    setSelectedItem((prev) => [...prev, item]);
    setItemList((prev) => prev.filter((i) => i.name !== item.name));
    setTimeout(() => {
        setSelectedItem((prev) => prev.filter((i) => i.name !== item.name));
        setItemList((prev) => [...prev, item]);
    }, 5000);
  }

  return (
    <div className="App">
      <ListCard itemList={itemList} handleClickItem={handleClickItem} />
      <FruitsCard selectedItem={selectedItem} handleClickItem={handleClickItem} />
      <Vegetable selectedItem={selectedItem} handleClickItem={handleClickItem} />
    </div>
  );
}

export default App;
