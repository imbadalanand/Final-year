import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const[id, idchange]=useState("");
    const[name, namechange]=useState("");
    const[password, passwordchange]=useState("");
    const[email, emailchange]=useState("");
    const[gender, genderchange]=useState("");
    const[address, addresschange]=useState("");
    const[phone, phonechange]=useState("");
    const[country, countrychange]=useState("india");
    const usenavigate = useNavigate ();

    const IsValidate = ()=>{
        let isproceed=true;
        let errormessage=' Please Enter the Value in';
        if(id===null || id===''){
            isproceed=false;
            errormessage += ' Username';
        }
        if(name===null || name===''){
          isproceed=false;
          errormessage += ' Full Name';
      }
      if(password===null || password===''){
        isproceed=false;
        errormessage += ' Password';
    }
    if(email===null || email===''){
      isproceed=false;
      errormessage += ' Email';
  }
        if(!isproceed){
            toast.info(errormessage)
        }
        return isproceed;
    }


    const handleSubmit = (e) => {
        if (IsValidate()){
        e.preventDefault();
        let regobj = { id, name, password, email, phone, country, address, gender };
       
        //console.log(regobj);
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success('Registered successfully.');
            usenavigate('/Login');
           
        }).catch((err) => {
          toast.error('Failed :' + err.message);
        });
    }
    }
  return (
    <>
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input value={id} onChange={e=>idchange(e.target.value)}className="form-control"></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input  value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control"></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input  value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input type="email" value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone No. <span className="errmsg">*</span>
                    </label>
                    <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="errmsg">*</span>
                    </label>
                    <select value={country} onChange={e=>countrychange(e.target.value)}className="form-control">
                      <option value="india">India</option>
                      <option value="nepal">Nepal</option>
                      <option value="usa">USA</option>
                      <option value="singapor">Singapore</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea value={address} onChange={e=>addresschange(e.target.value)} className="form-control"></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label> <br></br>
                    <input type="radio" checked={gender === 'male'} onChange={e=>genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                    <label>Male</label> <span></span>
                    <input type="radio" checked={gender === 'female'} onChange={e=>genderchange(e.target.value)}name="gender" value="female" className="app-check"></input>
                    <label>Female</label>
                  </div>
                </div>

              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link to={'/Login'} className="btn btn-danger">Close</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer/>
  </>
  );
};

export default Signup;
