import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Order = () => {

  const [orderdata, orderdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/order/detail/" + id);
  }
  // const LoadEdit = (id) => {
  //   navigate("/order/edit/" + id);
  // }
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch("http://localhost:5000/orders/" + id, {
        method: "DELETE"
      }).then((res) => {
        alert('Removed successfully.')
        window.location.reload();
      }).catch((err) => {
        console.log(err.message)
      })
    }
  }

  useEffect(() => {
    fetch("http://localhost:5000/orders").then((res) => {
      return res.json();
    }).then((resp) => {
      orderdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])

  console.log(orderdata);

  const getDeliveryDate = (date) =>{
    if(date){
      date = new Date(date);
      date =  date.setDate(date.getDate() + 10)
      console.log(new Date(date));
      return new Date(date).toString()
    }
  }


  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title' style={{ textAlign: "center" }}>
          {/* <img src="/images/arrow1.png" alt="arrow" className="arrow-icon" style={{ width:"25px", height:"25px"}} /> */}
          <h2>Ordered Book List</h2>
        </div>
        {/* <div className="card-body">
          <Link to="/order/create" className="btn btn-success">Add New Order(+)</Link>
        </div> */}
        <div className='card-body'>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr className="text-center">
                <td>Order ID</td>
                <td>Order Date</td>
                <td>Customer Name</td>
                <td>Phone</td>
                <td>Delivery Address</td>
                {/* <td>Payment Status</td> */}
                <td>Expected Delivery Date</td>
                {/* <td>Tracking No</td> */}
                <td>Action</td>

              </tr>
            </thead>
            <tbody>

              {orderdata &&
                orderdata.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.orderdate}</td>
                    <td>{item.address?.firstname + " "+item.address?.lastname}</td>
                    <td>{item.address?.phone}</td>
                    <td>{item.address?.address+","+item.address?.city+","+item.address?.state+" - "+item.address?.zipcode}</td> 
                    {/* <td>{item.paymentstatus}</td> */}
                    <td>{getDeliveryDate(item.orderdate)}</td>
                    {/* <td>{item.tracking}</td> */}
                    {/* <td>{item.action}</td> */}
                    <td style={{width:"20px"}}>
                      {/* <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a> */}
                      <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Cancel</a>
                      <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                    </td>
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

export default Order

