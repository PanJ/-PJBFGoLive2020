import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 29px;
  height: 29px;
  border: 6px #cfd7bb solid;
  border-radius: 15px;
  margin: 0 auto;
  background: white;
`;

const Line = styled.div`
  width: 7px;
  height: 100%;
  background: #cfd7bb;
  position: relative;
  left: 50%;
  margin-left: -3px;
`;

const scheduleItems = [
  {
    time: "7.09 น.",
    label: "พิธีสงฆ์",
  },
  {
    time: "8.39 น.",
    label: "แห่ขันหมาก",
  },
  {
    time: "10.00 น.",
    label: "พิธีหลั่งน้ำพระพุทธมนต์",
  },
  {
    time: "11.30 น.",
    label: "ร่วมรับประทานอาหาร (โต๊ะจีน)",
  },
];
export default () => (
  <div className="w-max flex flex-col text-green-dark text-xl my-8 font-eng">
    {scheduleItems.map((scheduleItem, index) => (
      <>
        <div className="w-max flex flex-row px-2">
          <span className="font-bold text-right w-4/12">
            {scheduleItem.time}
          </span>
          <div className="w-1/6">
            <Circle></Circle>
          </div>
          <span className="w-7/12">{scheduleItem.label}</span>
        </div>
        {index !== scheduleItems.length - 1 && (
          <div
            className="w-max flex flex-row px-2 h-5"
            style={{ marginTop: "-2px" }}
          >
            <span className="font-bold text-right w-4/12"></span>
            <div className="w-1/6">
              <Line></Line>
            </div>
            <span className="w-7/12"></span>
          </div>
        )}
      </>
    ))}
  </div>
);
