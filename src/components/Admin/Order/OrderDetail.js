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
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    
    let total =0; 
    orderdata.cart?.forEach(function(elem){
        total+=elem.price;
        });
    
    let totalquantity =0; 
    orderdata.cart?.forEach(function(elem){
        totalquantity+=elem.quantity;
        });
    
   const getDeliveryDate = (date) =>{
            if(date){
              date = new Date(date);
              date =  date.setDate(date.getDate() + 10)
              console.log(new Date(date));
              return new Date(date).toString()
            }
          }
    

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
                            
                            <h5>Username : {orderdata.userid}</h5>
                            <h5>Product Quantity: {totalquantity}</h5>
                            <h5>Price  :  {total}</h5>               
                            <h5>Delivery Detail : {orderdata.address?.firstname+" "+orderdata.address?.lastname +", "+orderdata.address?.address+","+orderdata.address?.city+","+orderdata.address?.state+" - "+orderdata.address?.zipcode}</h5>
                           
                            <h5>Expected Delivery Date : {getDeliveryDate(orderdata.orderdate)}</h5>

                            <Link className="btn btn-danger" to="/Order">Back to Order List</Link>
                        </div>
                    }
                    
                </div>
            </div>
        </div >
    )
}

export default OrderDetail
