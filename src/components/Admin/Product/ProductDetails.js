import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { productid } = useParams();

    const [productdata, productdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/products/" + productid).then((res) => {
            return res.json();
        }).then((resp) => {
            productdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div>

            <div className="container">
                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-header" style={{ textAlign: "center" }}>
                        <h2>Book Information</h2>
                    </div>
                    <hr />
                    <br />
                    {productdata &&
                        <div className='d-flex'>

                            <div className='card-body'>
                                <h2>The Book name is : <b>{productdata.name}</b></h2>
                                <h3>Book Details</h3>
                                <h5>Book ID  : {productdata.id}</h5>
                                <h5>Book Language  : {productdata.language}</h5>
                                <h5>Book Category  : {productdata.category}</h5>
                                <h5>Book Price  :  {productdata.price}</h5>
                                <h5>Book Quantity  : {productdata.quantity}</h5>
                                <h5>Book Author  : {productdata.author}</h5>
                                <h5>Book Review  : {productdata.numReviews}</h5>
                                <h5>Book Description  : {productdata.description}</h5>
                                <h5>Book Publisher  : {productdata.publisher}</h5>

                                <Link className="btn btn-danger" to="/Product">Back to User List</Link>
                            </div>
                            <div>
                                <img src={productdata.image} alt="" style={{ width: "200px", height: "200px", marginLeft: "10px", marginTop: "2rem" }} />
                            </div>
                        </div>
                    }
                </div>
            </div>
            {/* </div>
    </div> */}
        </div >
    )
}

export default ProductDetails
