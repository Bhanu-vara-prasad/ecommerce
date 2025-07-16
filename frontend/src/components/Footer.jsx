import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" w-full px-4">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="mt-3">
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure omnis
            mollitia optio repellendus, voluptatum repudiandae modi suscipit
            perferendis sunt vitae eum quos, nobis consequatur aperiam
            exercitationem aspernatur eveniet deserunt dolor!
          </p>
        </div>
        <div className="mt-3">
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 ">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="mt-3"> 
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 ">
            <li>+91 9182242042</li>
            <li>forever@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-3 text-sm text-center">
          Copyright 2025@ forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
