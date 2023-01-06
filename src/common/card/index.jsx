import React from "react";
import { CardWrapper } from "./styled-index";

const CommonCard = ({ imgSrc, text1, text2, spanText, time }) => {
  return (
    <>
      <CardWrapper>
        <div className="card-img">
          <img src={imgSrc} alt="image" />
        </div>
        <div className="card-content">
          <p className="p1">{text1}</p>
          <p className="p2">{text2}</p>
          <div>
            <span>{spanText}</span>
            <time>{time}</time>
          </div>
        </div>
      </CardWrapper>
    </>
  );
};

export default CommonCard;
