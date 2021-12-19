import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories';
import Products from './components/products';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
