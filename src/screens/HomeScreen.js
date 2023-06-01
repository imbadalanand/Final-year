import { Link } from 'react-router-dom';
import PRODUCTS from '../data';
import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Pagination from '../components/Pagination';

function HomeScreen() {

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

        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }

    }, [refresh])

    return (
        <>
            <div>
                <Carousel />
                <hr />
                <h1>Featured Books</h1>
                <hr />

                <div className="products">
                    {
                        PRODUCTS.products.map.id(product => (
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
                            </div>))
                    }
                </div>
            </div>
           
        </>
    )

}

export default HomeScreen;