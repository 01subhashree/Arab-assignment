import React from "react";
import { BsFillPersonFill, BsCheck2All } from "react-icons/bs";
import { MdArrowRightAlt } from "react-icons/md";
import style from "./Card1.module.css";

export default function Card1(props) {
  return (
    <div className={style.card1Screen}>
      <div className={style.card1Screen_div1}>
        <button
          className={style.card1Screen_button1}
          style={{ backgroundColor: `${props.color}` }}
        >
          {props.smallButtonText}
        </button>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <button
          className={style.card1Screen_button2}
          style={{ backgroundColor: `${props.color}` }}
        >
          {props.buttonText} <MdArrowRightAlt style={{ fontSize: "2rem" }} />
        </button>
      </div>
      <div className={style.card1Screen_div2}>
        <p>What you'll get :</p>
        <p>
          <BsFillPersonFill />
          {props.text1}
        </p>
        <p>
          {props.icon1}
          {props.text3}
        </p>
        <p>
          {props.icon2}
          {props.text4}
        </p>
        <p>
          <BsCheck2All style={{ fontSize: "1.5rem" }} />
          {props.text2}
        </p>
      </div>
    </div>
  );
}
