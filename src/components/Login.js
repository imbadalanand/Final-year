import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [id, idupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate=useNavigate()

  const ProceedLogin = (e) => {
    e.preventDefault();
    if(validate()){
      //implementation
      //console.log('proceed');
      fetch("http://localhost:5000/users/"+id).then((res)=>{
        return res.json();
      }).then((resp)=>{
        //console.log(resp)
        if(Object.keys(resp).length===0){
          alert('Please Enter valid username');
        }else{
          if (resp.id === id && resp.password === password){
            alert('Success');

            usenavigate('/')

          }else{
            alert('Please Enter valid credentials');
          }

        }
      }).catch((err)=>{
        alert.error('Login Failed due to:'+err.message);
      });

    }
  }
  const validate =()=>{
    let result=true;
    if(id ==='' || id===null){
      result=false;
      alert('Please Enter Username');
      
    }
    if(password ==='' || password===null){
      result=false;
      alert('Please Enter Password');
     

    }
    return result;
  }

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h1>User Login</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input value={id} onChange={e=>idupdate(e.target.value)} className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control"></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary" >Login</button>
              <Link className="btn btn-success" to={'/Signup'}>New User</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
