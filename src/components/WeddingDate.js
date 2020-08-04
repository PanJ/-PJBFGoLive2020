import React from "react";
import styled from "styled-components";
import bg22 from "../static/calendar-bg-22.png";
import bg29 from "../static/calendar-bg-29.png";

const offset = {
  "22": { left: "-23px", top: "-65px", zIndex: -1 },
  "29": { left: "-42px", top: "-70px", zIndex: -1 },
};

export default ({ date }) => {
  return (
    <div className="relative text-center mx-auto" style={{ width: "152px" }}>
      <MainWrapper>
        <div className="month font-en">August</div>
        <div className="date">{date}</div>
      </MainWrapper>
      <img
        alt="background flower"
        className="absolute"
        style={offset[date]}
        src={date === "22" ? bg22 : bg29}
      />
    </div>
  );
};

const MainWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
  border: 1px solid #cfd7bb;
  border-radius: 5px;
  background: white;
  position: relative;
  z-index: 1;
  .month {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    text-align: center;

    color: #ffffff;
    background-color: #cfd7bb;
    border: 1px solid #cfd7bb;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 5px;
  }

  .date {
    font-family: Anuphan;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 62px;
    text-align: center;

    color: #264a39;
  }
`;
