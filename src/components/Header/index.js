import React from "react";
import styled from "styled-components";
import logo from "../../static/logo.png";
import image from "../../static/NARA-98.png";
import names from "../../static/names.png";

export const Header = () => {
  return (
    <MainWrapper>
      <div className="wedding-logo-wrapper">
        <img
          className="wedding-logo"
          src={logo}
          alt="PJBF"
          width="78"
          height="78"
        />
      </div>
      <div className="wedding-image-wrapper">
        <img className="wedding-image" src={image} alt="PJBF" />
      </div>
      <div className="message-wrapper">Save the date</div>
      <div className="names-wrapper">
        <img src={names} alt="Kornkanok and Panjamapong" />
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  .wedding-logo-wrapper {
    width: 100%;
    text-align: center;
  }

  .wedding-image-wrapper {
    margin-top: -20px;
    position: relative;
    z-index: -1;
  }

  .wedding-image {
    width: 100%;
  }

  .message-wrapper {
    margin-top: 24px;

    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.185em;
    color: #e0a083;
  }

  .names-wrapper {
    padding-top: 29px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
`;
