import './App.css';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/shop" element={Shop} />
        <Route path="/cart" element={Cart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
