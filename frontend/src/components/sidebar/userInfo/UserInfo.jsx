import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GrChat } from "react-icons/gr";
import { PiCirclesThreePlusBold } from "react-icons/pi";
import { TiThMenuOutline } from "react-icons/ti";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../../hooks/useLogout";

const UserInfo = () => {
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("chat-user"));
    setProfilePic(user?.profilePic);
  });

  const { loading, logout } = useLogout();

  const handleClickSoon = () => {
    return toast.error("This feature is not available yet. Coming soon!");
  };
  return (
    <div className="userInfo">
      <div className="userimg">
        <img src={profilePic} alt="" className="cover" />
      </div>

      <div className="actions">
        <div onClick={handleClickSoon}>
          <PiCirclesThreePlusBold />
        </div>
        <div onClick={handleClickSoon}>
          <GrChat />
        </div>
        <div onClick={handleClickSoon}>
          <TiThMenuOutline />
        </div>
        <div>
          {!loading ? (
            <BiLogOut onClick={logout} />
          ) : (
            <span className="loading loading-spinner"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
