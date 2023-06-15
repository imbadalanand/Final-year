import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Pagination from '../components/Pagination';
import { updateAllProduct } from "../redux/actions/action";




function HomeScreen() {
    const dispatch = useDispatch()
    const allProduct = useSelector((s) => s.cartReducer.allProduct)
    const filteredProduct = useSelector((s) => s.cartReducer.filteredProduct)
    
    const [cart, setCart] = useState([])
    const [refresh, setRefresh] = useState(false)
   
    console.log(cart)

    const handleAddToCart = (e, product) => {

        console.log(e)
        console.log(product)

        setCart((prev) => [...prev, product])
        setRefresh(!refresh)
        // setCart([...cart , product ])
        // setCart([product])

    }

    useEffect(() => {
      fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => dispatch(updateAllProduct(data)))
        .catch(error => console.error(error));
    }, []);

    


    useEffect(() => {

        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }

    }, [refresh])

    console.log(allProduct);
      
    const getData = ()=>{
        if(filteredProduct.length){
            return filteredProduct
        }
        else{
            return allProduct
        }
    }

    return (
        <>
            <div>
                <Carousel />
                <hr />
                <h1>Featured Books</h1>
                <hr />

                <div className="products">
                {getData().map(product => (

                            <div className='product' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} alt={product.name} />
                                </Link>

                                <div className='card-detail'>
                                    <Link to={`/product/${product.id}`}>
                                        <p>{product.name}</p>
                                    </Link>

                                    <p>{product.category},{product.author}</p>
                                    <p> <i class="fa fa-inr"></i>{product.price}<span><button onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button></span></p>
                                </div>
                            </div>
                ))}
                    
                </div>
            </div>
            <Pagination />
        </>
    )

}


export default HomeScreen;
