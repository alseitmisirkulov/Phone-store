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
import { useState } from 'react';
import { cartItems, dataBase } from './data/db';

function App() {
  const [db, setDb] = useState(dataBase);
  const [emptyCartDb, setEmptyCartDb] = useState(cartItems);

  const handleAddToCart = (item) => {
    const existItem = emptyCartDb.find((el) => el.id === item.id);
    if (existItem) {
      const newItem = emptyCartDb.map((el) =>
        el.id === item.id ? { ...existItem, total: item.total + 1 } : el,
      );
      setEmptyCartDb(newItem);
    } else {
      const newItem = [...emptyCartDb, { ...item, total: 1 }];
      setEmptyCartDb(newItem);
    }
  };

  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage db={db} />} />
        <Route path="/cart" element={<Cart emptyCartDb={emptyCartDb} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/service" element={<Service />} />
        <Route path="/catalog-item" element={<CatalogItem handleAddToCart={handleAddToCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
