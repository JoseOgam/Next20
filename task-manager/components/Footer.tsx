"use client";

import { footerLinks } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className=" flex flex-col j items-start gap-6">
          <Image
            src="./next.svg"
            alt="footer logo"
            height={118}
            width={80}
            className=" object-contain"
          />
          <p className=" text-black">
            Task Manager App <br />
            all right reserved &copy;
          </p>
        </div>
        <div className=" flex flex-col gap-6 text-base min-w-[170px] ">
          {footerLinks.map((item) => (
            <div
              className=" flex flex-1 w-full md:justify-end flex-wrap max-md:mt-10 gap-20
            "
            >
              <h1>{item.title} </h1>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
