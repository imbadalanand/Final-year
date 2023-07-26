import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const User = () => {

  const [userdata, userdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/user/detail/" + id);
  }
  const LoadEdit = (id) => {
    navigate("/user/edit/" + id);
  }
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch("http://localhost:5000/users/" + id, {
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
    fetch("http://localhost:5000/users").then((res) => {
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
        <div className='card-title' style={{ textAlign: "center" }}>
        {/* <img src="/images/arrow1.png" alt="arrow" className="arrow-icon" style={{ width:"25px", height:"25px"}} /> */}
          <h2>User List</h2>
        </div>
        <div className="card-body">
          <Link to="/user/create" className="btn btn-success">Add New (+)</Link>
        </div>
        <div className='card-body'>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr className="text-center">
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>

              {userdata &&
                userdata.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a onClick={() => { LoadEdit(item.id) }}  className="btn btn-success">Edit</a>
                      <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                      <a onClick={() => { LoadDetail(item.id) }}  className="btn btn-primary">Details</a>
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

export default User
