import React from "react";
import { CgChevronRight } from "react-icons/cg";
import style from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={style.profile_Screen}>
      <img
        src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // width={50}
        alt="profile"
        className={style.profileScreen_image}
      />
      <p className={style.profileScreen_name}>
        Ram Mohan <CgChevronRight />
      </p>
      <p className={style.profileScreen_email}>rammohan@gmail.com</p>
    </div>
  );
}
