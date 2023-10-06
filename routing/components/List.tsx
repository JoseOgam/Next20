import { useRouter } from "next/navigation";
import React from "react";

const List = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("./about");
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-red-900 rounded-full px-3 py-3"
      >
        go to about
      </button>
    </div>
  );
};

export default List;
