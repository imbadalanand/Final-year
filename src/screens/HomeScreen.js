import { Link } from 'react-router-dom';
import PRODUCTS from '../data';
import Cart from '../components/Cart';
import { useEffect, useState } from 'react';

function HomeScreen (){

   const [cart, setCart] = useState([])
   const [refresh, setRefresh] = useState(false)

   console.log(cart)

    const handleAddToCart = (e, product) => {

        console.log(e)
        console.log(product)

        setCart((prev)=> [...prev, product])
        setRefresh(!refresh)
        // setCart([...cart , product ])
        // setCart([product])
        
    }

    useEffect(()=> {

        if(cart.length > 0){
            localStorage.setItem("cart", JSON.stringify(cart))
        }
       
    }, [refresh])
    
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
                    <button onClick={(e)=>handleAddToCart(e,product)}>Add to Cart</button>
                </div>))
                }
            </div>
        </div>
        </>
        )
    
}

export default HomeScreen;