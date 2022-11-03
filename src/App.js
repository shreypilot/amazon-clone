import './App.css';
import Header from "./components/Header.js";
import Home from"./components/Home.js";
import Product from"./components/Product.js";

function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <Product/>
      </div>
    
  );
}

export default App;
