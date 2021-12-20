import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories';
import Products from './components/products';
import SimpleCart from './components/simpleCart';
import './App.css';
import { useSelector } from 'react-redux';
function App() {
  const cart = useSelector(state => state.cart);
  return (
    <div className="App">
      <Header/>
      {cart.isOpen && <SimpleCart/>}
      {!cart.isOpen && <Categories/>}
      {!cart.isOpen && <Products/>}
      <Footer/>
    </div>
  );
}

export default App;
