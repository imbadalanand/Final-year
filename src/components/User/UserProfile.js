import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import AccountSettings from "./AccountSettings";
import "./userprofile.css";
import ChangePassword from "./ChangePassword";


const UserProfile = () => {
  const usenavigate = useNavigate();
 
  const { activepage } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("Aloggedin"));
 
  if (userInfo){
    alert("You are not authorised");
  }
  else{
   
  }
  
  
  
  return (
    <div className="userprofile">


     
      <h1>My Profile</h1>

      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {activepage === "accountsettings" && <AccountSettings />}
          {activepage === "changepassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
