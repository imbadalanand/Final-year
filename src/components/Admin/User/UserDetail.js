import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const UserDetail = () => {

    const { userid } = useParams();

    const [userdata, userdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/users/" + userid).then((res) => {
            return res.json();
        }).then((resp) => {
            userdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

  return (
    <div>
    {/* <div className="row">
        <div className="offset-lg-3 col-lg-6"> */}

       <div className="container">
        
    <div className="card row" style={{ "textAlign": "left" }}>
        <div className="card-title" style={{ textAlign: "center" }}>
            <h2>User Information</h2>
        </div>
        <div className="card-body"></div>

        {userdata &&
            <div>
                <h2>The User name is : <b>{userdata.name}</b>  ({userdata.id})</h2>
                <h3>Contact Details</h3>
                <h5>User ID  : {userdata.id}</h5>
                <h5>Email  : {userdata.email}</h5>
                <h5>Password  : {userdata.password}</h5>
                <h5>Phone  :  {userdata.phone}</h5>
                <h5>Address  : {userdata.address}</h5>
                <h5>Country  : {userdata.country}</h5>
                <h5>Gender  : {userdata.gender}</h5>

                <Link className="btn btn-danger" to="/User">Back to User List</Link>
            </div>
        }
    </div>
    </div>
    {/* </div>
    </div> */}
</div >
  )
}

export default UserDetail
