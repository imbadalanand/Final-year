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

               <div className='card-detail'>
               <Link to={`/product/${product.id}`}>
                <p>{product.name}</p>
                </Link>
               
                <p>{product.category},{product.author}</p>
                <p> <i class="fa fa-inr"></i>{product.price}<span><button>Add to Cart</button></span></p>
                
                </div>
                    
                </div>))
                }
            </div>
        </div>
        </>
        )
    
}

export default HomeScreen;