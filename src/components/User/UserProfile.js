import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import AccountSettings from "./AccountSettings";
import "./userprofile.css";
import ChangePassword from "./ChangePassword";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Yourorders from "./Yourorders";


const UserProfile = () => {
  const usenavigate = useNavigate();
 
  const { activepage } = useParams();

  const admin = JSON.parse(localStorage.getItem("Aloggedin"));

  if (admin){
    usenavigate('/Admin');
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
          {activepage === "yourorders" && <Yourorders />}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
