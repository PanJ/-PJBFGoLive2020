import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import WeddingDate from "../components/WeddingDate";
import WeddingLocation from "../components/WeddingLocation";
import WeddingTimeline from "../components/WeddingTimeline";
import heroImage from "../static/hero-2.jpg";
import names from "../static/names.png";
import footer from "../static/footer.jpg";

export const WeddingReception = () => {
  return (
    <Layout>
      <img className="w-full" src={heroImage} alt="PJBF" />
      <div className="mt-5 font-en font-bold text-sm tracking-widest text-center text-rose">
        Save the date
      </div>
      <div className="px-10 pt-8">
        <img className="mx-auto" src={names} alt="Kornkanok and Panjamapong" />
      </div>
      <div className="my-12 font-en text-rose text-center font-bold text-2xl tracking-widest">
        <div>Wedding Reception</div>
      </div>
      <MainWrapper>
        <WeddingDate date="29" />
        <div className="text-center font-en text-green py-8">
          <p className="">Saturday August 29, 2020</p>
          <p className="text-2xl font-bold">6:00pm onwards</p>
          <p className="text-rose my-3">(Cocktail reception)</p>
          <p className="mt-6 w-3/4 mx-auto">
            We would love to know if you can join our wedding reception.{" "}
          </p>
          <div className="flex flex-row mx-6 mt-5">
            <button className="font-bold w-1/2 block hover:text-white hover:bg-rose block my-2 mx-2 text-rose font-th p-2 border-solid border border-rose rounded">
              Can't go!
            </button>
            <button className="font-bold w-1/2 block text-white bg-rose block my-2 mx-2 font-th p-2 rounded">
              I'll be there!
            </button>
          </div>
        </div>
        <div className="wedding-location-wrapper">
          <WeddingLocation date="29" />
        </div>

        <div className="mt-4 px-8 py-2 text-green font-th">
          Dress code is not specified.
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
