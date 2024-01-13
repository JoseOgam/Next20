import React from "react";

const UserProfile = ({ params }: any) => {
  console.log(params);
  return (
    <div>
      UserProfile
      <span className=" text-black bg-blue-400 text-xl"> {params.id} </span>
    </div>
  );
};

export default UserProfile;
