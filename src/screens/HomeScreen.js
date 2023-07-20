import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import { updateAllProduct } from "../redux/actions/product";
import { addToCart } from "../redux/actions/cart";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function HomeScreen() {
   
    const dispatch = useDispatch()
    const allProduct = useSelector((s) => s.cartReducer.allProduct)
    const filteredProduct = useSelector((s) => s.cartReducer.filteredProduct)

    const [cart, setCart] = useState([])
    const [refresh, setRefresh] = useState(false)

    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit, setPageLimit] = useState();
    

    const handleAddToCart = (e, product) => {


        dispatch(addToCart(product))
        setRefresh(!refresh)
        toast.success("Added to Cart!", {
            position:"top-right"
        }
        );
        
    }

    const loadUserData = (action) => {
        setCurrentPage(currentPage+action)
    }

    console.log(loadUserData)
    // const handleReset = () => {
    //     loadUserData(0, 4, 0);
    // }



    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(response => response.json())
            .then(data => {
                setPageLimit(data.length/8)
                dispatch(updateAllProduct(data))})
            .catch(error => console.error(error));
    }, []);




    useEffect(() => {

        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }

    }, [refresh])


    // useEffect(()=>{
    //     setPageLimit(filteredProduct/8)
    // }, []);


    const getData = () => {
        let product = [...allProduct]
        if (filteredProduct.length) {
            product =  [...filteredProduct]
        }
        let _p = product.slice(currentPage*8, currentPage*8+8)
        return _p; 
        
    }
    const renderPagination = () => {
        if (currentPage === 0) {
            return (
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem>
                        <MDBPaginationLink>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem >
                        <button className='btn btn-primary' style={{width:"60px"}} onClick={() => loadUserData(+1)}>Next</button>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else if (currentPage < pageLimit - 1) {
            return (
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem>
                        <button className='btn btn-primary' style={{width:"60px"}} onClick={() => loadUserData(-1) }>Prev</button>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink>{currentPage +1}</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <button className='btn btn-primary' style={{width:"60px"}} onClick={() => loadUserData(+1)}>Next</button>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else {
            return (
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem>
                        <button className='btn btn-primary' style={{width:"60px"}} onClick={() => loadUserData(-1)}>Prev</button>
                    </MDBPaginationItem>
                    <MDBPaginationItem >
                        <MDBPaginationLink>{currentPage +1}</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            )
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
                                <p> <i className="fa fa-inr"> </i>{product.price}<span><button onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button></span></p>
                            </div>
                        </div>
                    ))}

                </div>
                <div style={{display:"flex", justifyContent:"center", boxSizing:"content-box" }}>{renderPagination()}</div>
            </div>
            <ToastContainer/>
        </>
    )

}


export default HomeScreen;
