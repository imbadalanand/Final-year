import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Product = () => {

  const [userdata, userdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/product/detail/" + id);
  }
  const LoadEdit = (id) => {
    navigate("/product/edit/" + id);
  }
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch("http://localhost:5000/products/" + id, {
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
    fetch("http://localhost:5000/products").then((res) => {
      return res.json();
    }).then((resp) => {
      userdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])


  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header' style={{ textAlign: "center" }}>
          <Link to="/Admin" style={{ width:"50px", height:"50px",color:"black", marginRight:"65rem"}}><i className="fa-solid fa-arrow-left-long" ></i></Link>
          <h2>Product Book List</h2>
        </div>
        <div className="card-body">
          <Link to="/product/create" className="btn btn-success">Add New Book (+)</Link>
        </div>
        <div className='card-body'>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr className="text-center">
                <td>ID</td>
                <td>Book Name</td>
                <td>Language</td>
                <td>Category</td>
                <td>Price</td>
                <td>Author</td>
                <td>Ratings</td>
                <td>Description</td>
                <td>Publisher</td>
                <td>Action</td>

              </tr>
            </thead>
            <tbody>

              {userdata &&
                userdata.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.language}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.author}</td>
                    <td>{item.rating}</td>
                    <td>{item.description.substring(0, 100)+"..." }</td>
                    <td>{item.publisher}</td>
                    <td>
                      <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                      <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
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

export default Product
