import React from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import Style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={Style.navbar_screen}>
      <img
        src="https://logodix.com/logo/435631.png"
        alt="logo"
        width={70}
        className={Style.navbar_image}
      />

      <div className={Style.navbar_screenDiv}>
        <button className={Style.navbar_screenDiv_button1}>
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_85765559-e1500610448497.jpg?auto=format&q=60&fit=max&w=930"
            alt="logo2"
            width={30}
          />
          XYZ Enterprises Pvt. Ltd
        </button>
        <button className={Style.navbar_screenDiv_button2}>
          <BiSolidChevronDown />
        </button>
      </div>
    </div>
  );
}
