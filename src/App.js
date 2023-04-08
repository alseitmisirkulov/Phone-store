import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Cart } from './pages/Cart';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { Service } from './pages/Service';
import { EmptyCart } from './pages/EmptyCart';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/emptycart" element={<EmptyCart />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
