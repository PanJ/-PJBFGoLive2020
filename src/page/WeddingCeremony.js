import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { WeddingDate } from "../components/WeddingDate";
import { WeddingLocation } from "../components/WeddingLocation";
import image from "../static/NARA-01.png";

export const WeddingCeremony = () => {
  return (
    <MainWrapper>
      <Header />
      <div className="wedding-name-wrapper">
        <div className="wedding-name">งานพิธีมงคลสมรส</div>
        <div className="wedding-name">Wedding Ceremony</div>
      </div>

      <WeddingDate date="22" />
      <div className="wedding-date">วันเสาร์ที่ 22 สิงหาคม 2563</div>
      <div className="wedding-location-wrapper">
        <WeddingLocation
          roomName="ณ ห้องแพลตตินั่ม ฮอลล์"
          hotelName="โรงแรมแกรนด์ เมอร์เคียว กรุงเทพ ฟอร์จูน"
          language="TH"
        />
      </div>

      <div>
        เพื่อไม่เป็นการรบกวนแขกผู้มาร่วมงาน เราจึงไม่กำหนดธีมสีการแต่งกาย
      </div>
      <div>
        เพื่อสุขอนามัยที่ดี ทางโรงแรมจะจัดแบ่งอาหารโต๊ะจีนเป็นชุดสำหรับ 1 ท่าน
      </div>
      <div className="hash-tag">#PJBFGoLive2020</div>
      <img src={image} alt="Kornkanok and Panjamapong" />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  .wedding-name-wrapper {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .wedding-name {
    font-family: Anuphan;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;

    color: #e0a083;
  }

  .wedding-date {
    margin-top: 26px;
    margin-bottom: 26px;

    font-family: Anuphan;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;

    color: #264a39;
  }

  .wedding-location-wrapper {
    margin-left: 34px;
    margin-right: 34px;
  }
`;
