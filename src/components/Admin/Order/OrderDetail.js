import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const OrderDetail = () => {

    const { orderid } = useParams();

    const [orderdata, orderdatachange] = useState({});
    const [productdata, productdatachange] = useState({});
    const [userdata, userdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/orders/" + orderid).then((res) => {
            return res.json();
        }).then((resp) => {
            orderdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div>
            <div className="container">
                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title" style={{ textAlign: "center" }}>
                        <h2>Order Information</h2>
                    </div>
                    <div className="card-body"></div>

                    {orderdata && 
                        <div>
                            <h3>Order Details</h3>
                            <h5>Order ID  : {orderdata.id}</h5>
                            <h5>Tracking Number : {orderdata.tracking}</h5>
                            <h5>Customer Name : {userdata.name}</h5>
                            <h5>Book Price  :  {orderdata.price}</h5>
                            <h5>Payment Status : {orderdata.paymentstatus}</h5>
                            <h5>Delivery Date : {orderdata.Ddate}</h5>

                            <Link className="btn btn-danger" to="/Order">Back to Order List</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default OrderDetail
