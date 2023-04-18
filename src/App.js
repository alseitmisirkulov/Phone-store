import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Cart } from './pages/Cart';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { Service } from './pages/Service';
import { NotFound } from './pages/NotFound';
import { CatalogItem } from './pages/CatalogItem';
import { useState, useEffect } from 'react';
import { cartItems, dataBase } from './data/db';

function App() {
  const [db, setDb] = useState(dataBase);
  const [emptyCartDb, setEmptyCartDb] = useState([]);

  const totalQty = emptyCartDb.reduce((acc, item) => acc + item.total * item.count, 1);

  const handleAddToCart = (item) => {
    const existItem = emptyCartDb.find((el) => el.id === item.id);
    if (existItem) {
      const newItem = emptyCartDb.map((el) =>
        el.id === item.id ? { ...existItem, total: item.total + 1 } : el,
      );
      setEmptyCartDb(newItem);
      localStorage.setItem('phoneStore', JSON.stringify(newItem));
    } else {
      const newItem = [...emptyCartDb, { ...item, total: 1 }];
      setEmptyCartDb(newItem);
      localStorage.setItem('phoneStore', JSON.stringify(newItem));
    }
  };

  const handleRemove = (item) => {
    const newItem = emptyCartDb.filter((el) => el.id !== item.id);
    setEmptyCartDb(newItem);
    localStorage.setItem('phoneStore', JSON.stringify(newItem));
  };

  useEffect(() => {
    setEmptyCartDb(JSON.parse(localStorage.getItem('phoneStore')) || []);
  }, []);

  return (
    <div className="App ">
      <Header totalQty={totalQty}/>
      <Routes>
        <Route path="/" element={<HomePage db={db} />} />
        <Route
          path="/cart"
          element={<Cart emptyCartDb={emptyCartDb} handleRemove={handleRemove} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="/catalog-item/:id"
          element={<CatalogItem handleAddToCart={handleAddToCart} db={db} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
