import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { WeddingDate } from "../components/WeddingDate";
import WeddingTimeline from "../components/WeddingTimeline";

export const Home = () => {
  return (
    <MainWrapper>
      <Header />
      <div className="dates-wrapper">
        <div className="date-item" style={{ paddingRight: 60 }}>
          <WeddingDate date="22" />
          <div className="date-description">
            <div>งานพิธีมงคลสมรส</div>
            <div>Wedding Ceremony</div>
          </div>
        </div>
        <div className="date-item">
          <WeddingDate date="29" />
          <div className="date-description">
            <div>งานฉลองมงคลสมรส</div>
            <div>Wedding Reception</div>
          </div>
        </div>
      </div>
      <WeddingTimeline></WeddingTimeline>
      <div className="hash-tag">#PJBFGoLive2020</div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  .dates-wrapper {
    margin-top: 36px;
    text-align: center;
  }

  .date-item {
    text-align: center;
    display: inline-block;
  }

  .date-description {
    margin-top: 16px;
    font-family: Anuphan;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    color: #264a39;
  }

  .hash-tag {
    margin-top: 55px;
    margin-bottom: 34px;

    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: #264a39;
  }
`;
