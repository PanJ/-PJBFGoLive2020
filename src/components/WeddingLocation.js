import React from "react";
import styled from "styled-components";

import marker from "../static/marker.png";
import car from "../static/car.png";
import mrt from "../static/mrt.png";

const data = {
  "22": {
    roomName: "ณ ห้องแพลตตินั่ม ฮอลล์",
    hotelName: "โรงแรมแกรนด์ เมอร์เคียว กรุงเทพ ฟอร์จูน",
    mrtTitle: "สถานี MRT พระราม 9",
    mrtDesc: "ทางออกไปฟอร์จูนทาวน์",
    parking: "มีที่จอดรถ",
    mapButton: "ดูแผนที่",
  },
  "29": {
    roomName: "Grand Ballroom",
    hotelName: "Grand Mercure Bangkok Fortune Hotel",
    mrtTitle: "MRT Rama 9",
    mrtDesc: "Fortune Town Exit",
    parking: "Parking space available",
    mapButton: "See on Map",
  },
};

export default ({ date }) => {
  return (
    <MainWrapper className="flex flex-col">
      <div className="header-wrapper">
        <img className="marker mx-auto" src={marker} alt="marker" />
        <div className="room-name">{data[date].roomName}</div>
        <div className="hotel-name">{data[date].hotelName}</div>
      </div>
      <div className="transport-wrapper flex flex-col">
        <div className="flex flex-row items-center">
          <img
            className="transport-icon"
            src={mrt}
            width={32}
            alt={data[date].mrtTitle}
          />
          <div className="transport-description">
            <div className="transport-desc-main">{data[date].mrtTitle}</div>
            <div className="transport-desc-extend">{data[date].mrtDesc}</div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img
            className="transport-icon"
            src={car}
            width={30}
            alt={data[date].parking}
          />
          <div className="transport-description">
            <div className="transport-desc-main">{data[date].parking}</div>
          </div>
        </div>
      </div>
      <a
        href="https://goo.gl/maps/UkHJsGGz9BqX8oGg7"
        target="_blank"
        className="block mt-6 text-white bg-rose mx-4 font-th py-2 px-6 font-bold border-solid rounded mx-auto"
      >
        {data[date].mapButton}
      </a>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  border: 1px solid #cfd7bb;
  box-sizing: border-box;
  border-radius: 5px;

  padding: 28px 10px;

  .header-wrapper {
    padding-bottom: 29px;
    text-align: center;
  }

  .marker {
    padding-bottom: 19px;
  }

  .room-name {
    font-family: Anuphan;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    text-align: center;

    color: #264a39;
  }

  .hotel-name {
    font-family: Anuphan;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    text-align: center;

    color: #e0a083;
  }

  .transport-wrapper {
    margin-left: 55px;
  }

  .transport-icon {
    display: inline-block;
  }

  .transport-description {
    display: inline-block;
    padding-left: 18px;
  }

  .transport-desc-main {
    font-family: Anuphan;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: left;

    color: #264a39;
  }

  .transport-desc-extend {
    font-family: Anuphan;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    text-align: left;

    color: #cfd7bb;
  }

  botton {
  }
`;
