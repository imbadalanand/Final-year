import {React, useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';




function Search() {

   
    const { searchid } = useParams(); 
  
   const [products, setProducts] = useState([]);
   
   
      
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
                                    <p> <i class="fa fa-inr"></i>{product.price}<span>
                                        {/* <button onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button> */}
                                    </span></p>
                                </div>
                            </div>
                ))}
                    
                </div>
                </div>
   )
                }

export default Search;