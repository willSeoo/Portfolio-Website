import React from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <p className="flex justify-center items-center">This is Profile page</p>
      <div className="flex justify-center items-center">
        <button
          className="bg-red-200 w-20 h-20 cursor-pointer "
          onClick={HandleClick}
        >
          Home
        </button>
      </div> 
    </div>
  );
};

export default Profile;
