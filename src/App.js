import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories';
import Products from './components/products';
import SimpleCart from './components/simpleCart';
import IndividualProduct from './components/individualProduct';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const cart = useSelector(state => state.cart);
  return (
    <div className="App">
      <Router>
        <Header />
        {!cart.isOpen && <Categories />}
        <Switch>
          <Route exact path='/'>
            {!cart.isOpen && <Products />}
          </Route>
          <Route path='/cart'>
            {cart.isOpen && <SimpleCart />}
          </Route>
          <IndividualProduct exact path='/products/:productID' />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
