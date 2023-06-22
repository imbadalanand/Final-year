import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const [id, idupdate] = useState("");
    const [password, passwordupdate] = useState("");

    const usenavigate = useNavigate()

    const Alogin = (e) => {
        e.preventDefult();
        if (Validate()) {
            fetch("http://localhost:5000/admin/" + id).then((res) => {
                return res.json();
            }).then((resp) => {
                if (Object.keys(resp).length === 0) {
                    alert('Please Enter valid username');
                } else {
                    if (resp.id === id && resp.password === password) {
                        alert('Success');
                        localStorage.setItem("user", JSON.stringify(resp));
                        localStorage.setItem("loggedin", true);
                        usenavigate('/')
                    } else {
                        alert('Please Enter valid credentials');

                    }
                }
            }).catch((err) => {
                alert.error('Login Failed due to:' + err.message);
            });
        }
    }
    const Validate = () => {
        let result = true;
        if (id === '' || id === null) {
            result = false;
            alert('Please Enter Username');

        }
        if (password === '' || password === null) {
            result = false;
            alert('Please Enter Password');


        }
        if(!result){
            alert("Enter Valid Credentials")
        }
        return result;
    }

    const handleSubmit = (e) =>{
        if (Validate()){
            e.preventDefult();
            let regadmin = {id, password};
            fetch("http://localhost:5000/admin/", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(regadmin)
            }).then((res) => {
                alert('Logged In successfully.');
                usenavigate('/Admin');
               
            }).catch((err) => {
                alert('Failed :' + err.message);
            });
        }
    }


    return (
        <div>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">

                            <div className="px-5 ms-xl-4">
                                <i className="fa-solid fa-open-book"></i>
                                <span className="h1 fw-bold mb-0">Admin Login</span>
                            </div>

                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                <form onSubmit={handleSubmit} style={{ width: "23rem" }}>
                                    <div className="form-outline mb-4">
                                        <label className="form-label">Email address</label>
                                        <input value={id} onChange={e=>idupdate(e.target.value)} className="form-control form-control-lg" placeholder='Enter Email Address' />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label">Password</label>
                                        <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control form-control-lg" placeholder='Password' />
                                    </div>

                                    <div className="pt-1 mb-4">
                                    <button type="submit" className="btn btn-primary" >Login</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src="https://www.pngitem.com/pimgs/m/274-2748802_transparent-tech-support-icon-png-admin-login-images.png"
                                alt="admin Login img" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminLogin
