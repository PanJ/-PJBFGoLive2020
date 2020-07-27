import React from "react";
import Layout from "../components/Layout";
import WeddingDate from "../components/WeddingDate";
import heroImage from "../static/hero-1.jpg";
import names from "../static/names.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Layout>
      <img className="w-full" src={heroImage} alt="PJBF" />
      <div className="mt-5 font-en font-bold text-sm tracking-widest text-center text-rose">
        Save the date
      </div>
      <div className="px-10 pt-8">
        <img className="mx-auto" src={names} alt="Kornkanok and Panjamapong" />
      </div>
      <div className="mt-8 flex justify-evenly text-green font-bold">
        <div className="text-center">
          <WeddingDate date="22" />
          <div className="date-description my-4">
            <div className="font-th">งานพิธีมงคลสมรส</div>
            <div className="font-en">Wedding Ceremony</div>
          </div>
          <Link
            to="/a"
            className="hover:text-white hover:bg-rose block my-2 mx-4 text-rose font-th p-2 border-solid border border-rose rounded"
          >
            ดูรายละเอียด
          </Link>
        </div>
        <div className="text-center">
          <WeddingDate date="29" />
          <div className="date-description my-4">
            <div className="font-th">งานฉลองมงคลสมรส</div>
            <div className="font-en">Wedding Reception</div>
          </div>
          <Link
            to="/b"
            className="hover:text-white hover:bg-rose block my-2 mx-4 text-rose font-th p-2 border-solid border border-rose rounded"
          >
            ดูรายละเอียด
          </Link>
        </div>
      </div>
      <div className="font-en mt-12 mb-8 text-xs text-green font-normal text-center">
        #PJBFGoLive2020
      </div>
    </Layout>
  );
};
