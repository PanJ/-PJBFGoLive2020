import React from "react";
import styled from "styled-components";

export const WeddingDate = (props) => {
  return (
    <MainWrapper>
      <div className="month">August</div>
      <div className="date">{props.date}</div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
  border: 1px solid #cfd7bb;
  border-radius: 5px;

  .month {
    font-family: Anuphan;
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
