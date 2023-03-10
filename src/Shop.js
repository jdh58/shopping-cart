import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState('');

  const getShopItems = async () => {
    let items = await fetch('https://fakestoreapi.com/products');
    items = await items.json();
    setItems(items);
  };

  const itemList = () => {};

  useEffect(() => {
    getShopItems();
  }, []);

  useEffect(() => {}, [sort]);

  return (
    <div className="shopPage">
      <div className="sortPanel">
        <ul className="sortList">
          <li className="sortItem">ID Numbers</li>
          <li className="sortItem">Price (Low to High)</li>
          <li className="sortItem">Price (High to Low)</li>
          <li className="sortItem">Items</li>
        </ul>
      </div>
      <div className="shopGrid">
        {items.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          items.map((item) => <ItemCard item={item} />)
        )}
      </div>
    </div>
  );
}
