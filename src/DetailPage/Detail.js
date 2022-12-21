import React from "react";
import Header from "../Header";
import "./Detail.css";
import { FaSnowflake } from "react-icons/fa";
import { GiGardeningShears } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiWater } from "react-icons/bi";
import { AiOutlineWifi } from "react-icons/ai";

const Detail = () => {
  return (
    <div className="detail">
      <Header />
      <div className="detailed-page">
        <h1>Jannat 100% PetFriendly Pool villa with LakeView</h1>
        <div className="location-nav">
          <h3 className="review">.6 reviews</h3>
          <h3 className="review">.Pimplad Nasik .Maharashtra .India</h3>
        </div>
        <div className="location-images-grid">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/c8f48e8b-091d-47ea-85ac-b31bc2604bbb.jpeg?im_w=1200" />
          <div>
            {/* <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/59af5e61-037e-440c-92b5-429edc8baafe.jpeg?im_w=720"
              className="img-2"
            /> */}
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/5fae54d7-9455-4c79-b077-02222ed699dd.jpeg?im_w=720"
              className="img-3"
            />
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/6b063c87-500b-4fe5-81b0-70ef370a1802.jpeg?im_w=720"
              className="img-4"
            />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/ca080024-4408-4808-aecc-83e411bc7ff9.jpeg?im_w=720" />
          </div>
        </div>

        <section className="section-1">
          <div className="owner-details-nav">
            <div>
              <h3>Entire villa hosted by Shreya</h3>
              <ul>
                <li>3 bedrooms</li>
                <li>3 beds</li>
                <li>12 guests</li>
              </ul>
            </div>

            <img
              src="https://a0.muscache.com/im/pictures/user/b861bd91-1b45-4371-9398-7ce856a70af4.jpg?im_w=240"
              className="owner-img"
            />
          </div>
        </section>

        <section className="section-2">
          <h2>What this place offers</h2>
          <ul>
            <li>
              <GiGardeningShears /> Garden View{" "}
            </li>
            <li>
              <FaSnowflake /> Lake View
            </li>
            <li>
              <BiWater /> Waterfront
            </li>
            <li>
              <MdOutlinePool /> Private Pool
            </li>
            <li>
              <AiOutlineWifi /> WiFi
            </li>
            <li>
              <HiOutlineVideoCamera /> Security Cameras
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Detail;
