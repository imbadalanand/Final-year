import {React, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { addToCart } from "../redux/actions/cart";



function Search() {

    const dispatch = useDispatch()
    const { searchid } = useParams(); 
  
   const [products, setProducts] = useState([]);
   const [refresh, setRefresh] = useState(false)


   const handleAddToCart = (e, product) => {

    console.log(e)
    console.log(product)

    // setCart((prev) => [...prev, product])
    dispatch(addToCart(product))
    setRefresh(!refresh)
    // setCart([...cart , product ])
    // setCart([product])

}
   
   
      
   useEffect((props) => {
     fetch(`${process.env.REACT_APP_URL}/products?q=${searchid}`)
       .then(response => response.json())
       .then(data => setProducts(data))
       .catch(error => console.error(error));
   },[searchid]);
  
  
   return(
    <div>
    <hr />
    <h1>Searched Results</h1>
    <hr />

    <div className="products">
                {products.map(product => (
                            <div className='product' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} alt={product.name} />
                                </Link>

                                <div className='card-detail'>
                                    <Link to={`/product/${product.id}`}>
                                        <p>{product.name}</p>
                                    </Link>

                                    <p>{product.category},{product.author}</p>
                                    {/* <p> <i class="fa fa-inr"></i>{product.price}<span> */}
                                    <p> <i className="fa fa-inr"></i>{product.price}<span><button onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button></span></p>
                                </div>
                            </div>
                ))}
                    
                </div>
                </div>
   )
                }

export default Search;