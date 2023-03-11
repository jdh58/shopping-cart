import './styles/SortPanel.css';

export default function SortPanel(props) {
  return (
    <div className="sortPanel">
      <ul className="sortList">
        <h4>Sort by:</h4>
        <li className="sortItem selected">ID Numbers</li>
        <li className="sortItem">Price (Low to High)</li>
        <li className="sortItem">Price (High to Low)</li>
        <li className="sortItem">Items</li>
      </ul>
      <ul className="filterList">
        <h4>Filter by:</h4>
        <li>
          <input type="checkbox" name="electronics" id="electronics" />
          <label htmlFor="electronics">Electronics</label>
        </li>
        <li>
          <input type="checkbox" name="jewelery" id="jewelery" />
          <label htmlFor="jewelery">Jewelery</label>
        </li>
        <li>
          <input type="checkbox" name="mens" id="mens" />
          <label htmlFor="mens">Men's Clothing</label>
        </li>
        <li>
          <input type="checkbox" name="womens" id="womens" />
          <label htmlFor="womens">Women's Clothing</label>
        </li>
      </ul>
    </div>
  );
}
