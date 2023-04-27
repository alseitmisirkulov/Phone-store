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
import { dataBase } from './data/db';
import { Loader } from './components/common/select/loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [db, setDb] = useState(dataBase);
  const [emptyCartDb, setEmptyCartDb] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const totalQty = emptyCartDb.reduce((acc, item) => acc + item.total * item.count, 0);

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

  const handleMinusItem = (item) => {
    const existItem = emptyCartDb.find((el) => el.id === item.id);
    if (existItem.total === 1) {
      const newItem = emptyCartDb.filter((el) => el.id !== item.id);
      setEmptyCartDb(newItem);
      localStorage.setItem('phoneStore', JSON.stringify(newItem));
    } else {
      const newItem = emptyCartDb.map((el) =>
        el.id === item.id ? { ...existItem, total: existItem.total - 1 } : el,
      );
      setEmptyCartDb(newItem);
      localStorage.setItem('phoneStore', JSON.stringify(newItem));
    }
  };

  const handleRemove = (item) => {
    const newItem = emptyCartDb.filter((el) => el.id !== item.id);
    setEmptyCartDb(newItem);
    localStorage.setItem('phoneStore', JSON.stringify(newItem));
  };

  const handleRemoveFav = (item) => {
    const newItem = favorite.filter((el) => el.id !== item.id);
    setFavorite(newItem);
    localStorage.setItem('favoriteStore', JSON.stringify(newItem));
  };

  useEffect(() => {
    setEmptyCartDb(JSON.parse(localStorage.getItem('phoneStore')) || []);
    setFavorite(JSON.parse(localStorage.getItem('favoriteStore')) || []);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App ">
          <Header totalQty={totalQty} favorite={favorite} />
          <Routes>
            <Route
              path="/"
              element={<HomePage db={db} favorite={favorite} setFavorite={setFavorite} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  emptyCartDb={emptyCartDb}
                  handleRemove={handleRemove}
                  handleAddToCart={handleAddToCart}
                  handleMinusItem={handleMinusItem}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorite={favorite}
                  setFavorite={setFavorite}
                  handleRemoveFav={handleRemoveFav}
                />
              }
            />
            <Route path="/service" element={<Service />} />
            <Route
              path="/catalog-item/:id"
              element={<CatalogItem handleAddToCart={handleAddToCart} db={db} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
