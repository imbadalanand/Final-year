import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminLogin = () => {

  
  const usenavigate=useNavigate()
  if(localStorage.getItem("user")){
    usenavigate('/');
    toast.warn("User Account, Please Logout")
  }

  if(localStorage.getItem("Aloggedin")){
    usenavigate('/Admin');
  }
  

  const [id, idupdate] = useState("");
  const [password, passwordupdate] = useState("");


  const ProceedLogin = (e) => {
    e.preventDefault();
    if(validate()){
      //implementation
      //console.log('proceed');
      fetch("http://localhost:5000/admin/"+id).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
        if(Object.keys(resp).length===0){
          toast.info('Please Enter valid username');
        }else{
          if (resp.id === id && resp.password === password){
          
            localStorage.setItem("user", JSON.stringify(resp));
            localStorage.setItem("Aloggedin", true);
            usenavigate('/Admin')
            toast.success('Login Success');
          }else{
            toast.info('Please Enter valid credentials');
          }

        }
      }).catch((err)=>{
        toast.error('Login Failed due to:'+err.message);
      });

    }
  }
  const validate =()=>{
    let result=true;
    if(id ==='' || id===null){
      result=false;
      toast.info('Please Enter Username');
      
    }
    if(password ==='' || password===null){
      result=false;
      toast.info('Please Enter Password');
     

    }
    return result;
  }

  return (
    <>
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h1>Admin Login</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  Admin User ID <span className="errmsg">*</span>
                </label>
                <input value={id} onChange={e=>idupdate(e.target.value)} className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control"></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary" >Admin Login</button>
             
            </div>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};
export default AdminLogin;
