import React from "react";
import { useParams } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import AccountSettings from "./AccountSettings";
import "./userprofile.css";

const UserProfile = () => {
  const { activepage } = useParams();
  alert(activepage);
  return (
    <div className="userprofile">
      <h1>My Profile</h1>

      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {activepage === "accountsettings" && <AccountSettings />}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
