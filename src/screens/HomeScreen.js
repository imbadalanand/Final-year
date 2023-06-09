import { Link,useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Pagination from '../components/Pagination';
import axios from 'axios';




function HomeScreen() {

    const [cart, setCart] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");

    console.log(cart)

    const handleAddToCart = (e, product) => {

        console.log(e)
        console.log(product)

        setCart((prev) => [...prev, product])
        setRefresh(!refresh)
        // setCart([...cart , product ])
        // setCart([product])

    }

    const [products, setProducts] = useState([]);
    const [records, setRecords] = useState([]);
    const [search, setsearch] = useState('')
      
    useEffect(() => {
      axios.get('http://localhost:5000/products')
        .then(res => {
        setProducts(res.data)
         setRecords(res.data)
    })
        .catch(error => console.error(error));
    }, []);

    


    useEffect(() => {

        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }

    }, [refresh])


    // const Filter = (event) => {
    //     setRecords(products.filter(f => f.name.toLowercase().includes(event.target.value)))
    // }

    return (
        <>
            <div>
                <Carousel />
                <hr />
                <h1>Featured Books</h1>
                <hr />
{/*                
               <div>
                <input type="text" className='form-control' onChange={Filter}></input>
               </div> */}
                
                <div className="products">
                {records.map(product => (
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

export default HomeScreen ;