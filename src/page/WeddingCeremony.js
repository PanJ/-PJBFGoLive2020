import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import WeddingDate from "../components/WeddingDate";
import WeddingLocation from "../components/WeddingLocation";
import WeddingTimeline from "../components/WeddingTimeline";
import heroImage from "../static/hero-1.jpg";
import names from "../static/names.png";
import footer from "../static/footer.jpg";

export const WeddingCeremony = () => {
  return (
    <Layout>
      <img className="w-full" src={heroImage} alt="PJBF" />
      <div className="mt-5 font-en font-bold text-sm tracking-widest text-center text-rose">
        Save the date
      </div>
      <div className="px-10 pt-8">
        <img className="mx-auto" src={names} alt="Kornkanok and Panjamapong" />
      </div>
      <div className="my-12 font-th text-rose text-center font-bold text-2xl leading-tight">
        <div>งานพิธีมงคลสมรส</div>
        <div className="font-en">Wedding Ceremony</div>
      </div>
      <MainWrapper>
        <WeddingDate date="22" />
        <div className="wedding-date">วันเสาร์ที่ 22 สิงหาคม 2563</div>
        <WeddingTimeline />
        <div className="wedding-location-wrapper">
          <WeddingLocation date="22" />
        </div>

        <div className="mt-4 px-8 py-2 text-green font-th">
          เพื่อไม่เป็นการรบกวนแขกผู้มาร่วมงาน เราจึงไม่กำหนดธีมสีการแต่งกาย
        </div>
        <div className="px-8 py-2 text-green font-th">
          เพื่อสุขอนามัยที่ดี ทางโรงแรมจะจัดแบ่งอาหารโต๊ะจีนเป็นชุดสำหรับ 1 ท่าน
        </div>
        <div className="font-en mt-12 mb-8 text-xs text-green font-normal text-center">
          #PJBFGoLive2020
        </div>
        <img src={footer} alt="Kornkanok and Panjamapong" />
      </MainWrapper>
    </Layout>
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
