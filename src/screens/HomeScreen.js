import { Link } from 'react-router-dom';
import PRODUCTS from '../data';
function HomeScreen (){
    return(
        <>
        <div>
             <h1>Featured Books</h1>
            <div className="products">
                {
                PRODUCTS.products.map(product => (
                <div className='product' key={product.key}>
                <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name}/>
                </Link>

                <Link to={`/product/${product.id}`}>
                <p>{product.name}</p>
                </Link>
               
                <p>{product.language},{product.category},{product.author}</p>
                <p> <i class="fa fa-inr"></i>{product.price}</p>
                    <button>Add to Cart</button>
                </div>))
                }
            </div>
        </div>
        </>
        )
    
}

export default HomeScreen;