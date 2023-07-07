import React, { useEffect, useState } from "react";
import "./changepassword.css";

const ChangePassword = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [alldata, setAlldata] = useState({});
  const [originalpass, setOriginalPassword] = useState("");
  const [oldpass, oldpasswordchange] = useState("");
  const [newpass, newpasswordchange] = useState("");
  const [password, rnewpasswordchange] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/users/" + userInfo.id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setAlldata(resp);
        setOriginalPassword(resp.password);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[password]);

  

  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = { ...alldata, password };

    if(originalpass === oldpass){

        if(newpass == password){
            fetch("http://localhost:5000/users/" + userInfo.id, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(userdata),
              })
                .then((res) => {
                  alert("Password Changed successfully.");
                })
                .catch((err) => {
                  console.log(err.message);
                });
        }

        else{
            alert("New Password Do Not Match");
        }
    
    }

    else{
        alert("Enter Correct Old Password");
    }



  
  };
  return (
    <div className="changepassword">
      <h5 className="mainhead1">Change Password</h5>

      <div div className="form">
        <form className="container" onSubmit={handlesubmit}>
          <div className="form-group">
            <label>Old Password</label>
            <input type="password" onChange={(e) => oldpasswordchange(e.target.value)} className="form-control"></input>
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input type="password" onChange={(e) => newpasswordchange(e.target.value)} className="form-control"></input>
          </div>

          <div className="form-group">
            <label>Re-Enter New Password</label>
            <input type="password" onChange={(e) => rnewpasswordchange(e.target.value)} className="form-control"></input>
          </div>

          <div className="form-group">
            <button className="mainbutton1" type="submit">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ChangePassword;
