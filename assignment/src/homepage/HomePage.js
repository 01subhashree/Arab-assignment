import React from "react";
import Card2 from "../components/cards/card2/Card2";
import Card1 from "../components/cards/card1/Card1";
import { AiOutlineMail } from "react-icons/ai";
import { TiCloudStorageOutline } from "react-icons/ti";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.homescreen}>
      <h2>Choose a plan that's just right for you !</h2>
      <div className={style.homescreen_div1}>
        <div className={style.homescreen_innerDiv}>
          <button>Monthly</button>
          <button>Annually</button>
        </div>
      </div>
      <div className={style.homescreen_div2}>
        <Card2
          heading="Basic"
          color="#ecd28e"
          originalPrice="$ 89.99/mo"
          price="$ 9.99/mo"
          text1="Upto 25 users"
          text2="Upto 25gb Storage"
          text3="Email Support"
        />
        <Card2
          heading="Standard"
          color="#fa728ac2"
          originalPrice="$ 189.99/mo"
          price="$ 99.99/mo"
          text1="Upto 50 users"
          text2="Upto 60gb Storage"
          text3="Email+Chat Support"
        />
        <Card2
          heading="Preminum"
          color="#c88bf1"
          originalPrice="$ 389.99/mo"
          price="$ 199.99/mo"
          text1="Upto 75 users"
          text2="Upto 100gb Storage"
          text3="Email+Chat+Whatsapp Support"
        />
      </div>
      <div className={style.homescreen_div3}>
        <Card1
          smallButtonText="Free Forever"
          heading="Free Starter"
          text="The quickset and easiest way to try Prorocols with basic functionalities"
          buttonText="Get Started"
          text1="Upto 8 Users"
          text2="Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included"
          text3="Upto 3gb Storage"
          text4="Email Support"
          icon1={<TiCloudStorageOutline />}
          icon2={<AiOutlineMail />}
          color="#9af40fa6"
        />
        <Card1
          smallButtonText="Let's Connect"
          color="#4bb2f4ad"
          heading="Enterprise Plan"
          text="Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success"
          buttonText="Contacy Us"
          text1="More than 75 Users"
          text2="Customization of all other features"
        />
      </div>
      <p className={style.homescreen_para}>
        *some unique features are provided as add-ons with individual plans for
        each features
      </p>
    </div>
  );
}
