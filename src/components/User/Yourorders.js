import React, { useEffect, useState } from 'react'
import './yourorders.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { all } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Yourorders = () => {

  const [orderdata, orderdatachange] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/Userorder/" + id);
  }
 
  useEffect(() => {
    fetch("http://localhost:5000/orders?userid="+userInfo.id).then((res) => {
      return res.json();
    }).then((resp) => {
      orderdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])


  const getDeliveryDate = (date) =>{
    if(date){
      date = new Date(date);
      date =  date.setDate(date.getDate() + 10)
      console.log(new Date(date));
      return new Date(date).toString()
    }
}


  return (
    <div className='container-5'>
      <div className='card'>
        <div className='card-title' style={{ textAlign: "center" }}>
    
        </div>
        <h5  style={{ textAlign: "center" }}>Click on Order Id to See Detail</h5>
        <div className='card-body'>
          <table className="table table-bordered">
            
            <thead className="thead">
              <tr className="text-center">
                <td>Order ID</td>
                <td>Order Date</td>
              
              
                <td>Phone</td>
                <td>Delivery Detail</td>
                {/* <td>Payment Status</td> */}
                <td>Expected Delivery on</td>
                {/* <td>Tracking No</td> */}
             

              </tr>
            </thead>
            <tbody>

              {orderdata &&
                orderdata.map(item => (
                  <tr key={item.id}>
                    <td onClick={() => LoadDetail(item.id)} style={{cursor: "pointer", fontWeight: 'bold' }}>{item.id} </td>
                    <td>{item.orderdate}</td>
                
                    <td>{item.address?.phone}</td>
                    <td>{item.address?.firstname + " "+item.address?.lastname +","+item.address?.address+","+item.address?.city+","+item.address?.state+" - "+item.address?.zipcode}</td> 
                    {/* <td>{item.paymentstatus}</td> */}
                    <td>{getDeliveryDate(item.orderdate)}</td>
                    {/* <td>{item.tracking}</td> */}
                    {/* <td>{item.action}</td> */}
                   
                  </tr>
                ))
              }

            </tbody>

          </table>

        </div>
      </div>
    </div>
  )
}
 
export default Yourorders;
