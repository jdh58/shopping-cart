import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import SortPanel from './SortPanel';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState('');

  const getShopItems = async () => {
    let items = await fetch('https://fakestoreapi.com/products');
    items = await items.json();
    setItems(items);
  };

  useEffect(() => {
    getShopItems();
  }, []);

  useEffect(() => {}, [sort]);

  return (
    <div className="shopPage">
      <h2>Shop Page</h2>

      <SortPanel />
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
