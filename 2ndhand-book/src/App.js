
import './App.css';
import data from './data';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   
    <div>
      <header>
        <a href="/">Old Book</a>
      </header>
      <main>
         <h1>Featured Books</h1>
        <div className="products">
        {
        data.products.map(product => (
        <div className='product' key={product.key}>
          <img src={product.image} alt={product.name}/>
          <p>{product.name}</p>
          <p>{product.language},{product.category},{product.author}</p>
          <p> <i class="fa fa-inr"></i>{product.price}</p>

        </div>))
        }
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
