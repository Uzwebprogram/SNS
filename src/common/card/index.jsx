import React from "react";
import { CardWrapper } from "./styled-index";

const CommonCard = ({ imgSrc, text1, text2, text3,text4, text5, spanText, bgColor, time, isBorder, isTime }) => {
  return (
    <>
      <CardWrapper bgColor={bgColor} isBorder={isBorder}>
        <div className="card-img">
          <img src={imgSrc} alt="image"  />
        </div>
        <div className="card-content">
          <p className='p1'>{text1}</p>
          <p className="p2">{text2}</p>
          <p className="p2">{text3}</p>
          <p className="p2">{text4}</p>
          <p className="p2">{text5}</p>
          {isTime == true ? null : (
          <div>
            <span>{spanText}</span>
            <time>{time}</time>
          </div>
        )}
        </div>
      </CardWrapper>
    </>
  );
};

export default CommonCard;
