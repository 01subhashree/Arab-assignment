import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FcFaq } from "react-icons/fc";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import Style from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={Style.sidebarScreen}>
      <div className={Style.sidebarScreen_innerDiv}>
        <div className={Style.sidebarScreen_boxs}>
          <LuLayoutDashboard /> Dashboard
        </div>
        <div className={Style.sidebarScreen_boxs}>
          <img
            src="https://w7.pngwing.com/pngs/210/141/png-transparent-ayurveda-and-yoga-panchakarma-ayurvedic-home-remedies-medicine-health-leaf-logo-logo-vector.png"
            alt="perks"
            width={15}
          />
          Perks
        </div>
        <div className={Style.sidebarScreen_boxs}>
          <IoExtensionPuzzleSharp />
          Addons
        </div>
        <div className={Style.sidebarScreen_boxs}>
          <FcFaq />
          FAQ
        </div>
        <div className={Style.sidebarScreen_boxs}>
          <BiSupport />
          Support
        </div>
      </div>
      <div className={Style.sidebarScreen_button}>
        Logout
        <img
          src="https://i.vippng.com/png/small/218-2184063_blue-logout-button-png.png"
          alt="Logout"
          width={13}
        />
      </div>
    </div>
  );
}
