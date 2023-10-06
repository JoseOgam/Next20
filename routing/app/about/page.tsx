"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("./");
  };
  return (
    <div className="flex justify-center items-center p-56">
      <button
        onClick={handleClick}
        className="bg-red-900 rounded-full px-3 py-3"
      >
        go to home
      </button>
    </div>
  );
};

export default About;
