import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Userorder = () => {

    const { orderid } = useParams();

    const [orderdatau, orderdatachange] = useState({});
  
    

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
    orderdatau.cart?.forEach(function(elem){
        total+=elem.price;
        });
    
    let totalquantity =0; 
    orderdatau.cart?.forEach(function(elem){
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

            hi 
        </div>


    )
}

export default Userorder;
