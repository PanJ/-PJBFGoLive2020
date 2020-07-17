import React from "react";
import styled from "styled-components";

import marker from "../../static/marker.png";
import car from "../../static/car.png";
import mrt from "../../static/mrt.png";

export const WeddingLocation = (props) => {
  return (
    <MainWrapper>
      <div className="header-wrapper">
        <img className="marker" src={marker} alt="marker" />
        <div className="room-name">{props.roomName}</div>
        <div className="hotel-name">{props.hotelName}</div>
      </div>
      {props.language === "TH" ? (
        <div className="transport-wrapper">
          <div>
            <img
              className="transport-icon"
              src={mrt}
              width={30}
              alt="สถานี MRT พระราม 9"
            />
            <div className="transport-description">
              <div className="transport-desc-main">สถานี MRT พระราม 9</div>
              <div className="transport-desc-extend">ทางออกไปฟอร์จูนทาวน์</div>
            </div>
          </div>
          <div>
            <img
              className="transport-icon"
              src={car}
              width={30}
              alt="มีที่จอดรถ"
            />
            <div className="transport-description">
              <div className="transport-desc-main">มีที่จอดรถ</div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <img src={mrt} alt="MRT Rama 9" />
            <div>MRT Rama 9</div>
            <div>Fortune Town Exit</div>
          </div>
          <div>
            <img src={car} alt="Parking space available" />
            <div>Parking space available</div>
          </div>
        </div>
      )}
      <div className="button-wrapper">
        <button>ดูแผนที่</button>
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  border: 1px solid #cfd7bb;
  box-sizing: border-box;
  border-radius: 5px;

  padding-top: 28px;
  padding-bottom: 28px;

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

  .button-wrapper {
    text-align: center;
    padding-top: 20px;
  }

  botton {
  }
`;
