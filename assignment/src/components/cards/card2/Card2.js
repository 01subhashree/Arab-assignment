import React from "react";
import { BiCaretRight } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdArrowRightAlt } from "react-icons/md";
import { TiCloudStorageOutline } from "react-icons/ti";
import style from "./Card2.module.css";

export default function Card2(props) {
  return (
    <div className={style.card2Screen}>
      <h2>{props.heading}</h2>
      <p className={style.card2Screen_originalPrice}>{props.originalPrice}</p>
      <p className={style.card2Screen_Price}>{props.price}</p>
      <button
        className={style.card2Screen_button}
        style={{ backgroundColor: `${props.color}` }}
      >
        Get Started <MdArrowRightAlt style={{ fontSize: "2rem" }} />
      </button>
      <hr />
      <div className={style.card2Screen_para}>
        <p>What you'll get:</p>
        <p>
          <BsFillPersonFill />
          {props.text1}
        </p>
        <p>
          <TiCloudStorageOutline />
          {props.text2}
        </p>
        <p>
          <AiOutlineMail />
          {props.text3}
        </p>
      </div>
      <p className={style.para}>
        EXPLORE FEATURES{" "}
        <BiCaretRight style={{ color: `${props.color}`, fontSize: "0.9rem" }} />
      </p>
    </div>
  );
}
