import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";

const PersonalTab = ({ isMargin }) => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <WrapperPress isMargin={isMargin}>
        <div className="bgBlue">
          <p>Информация</p>
        </div>
        <div className="black">
          <p>Динамика отрасли</p>
        </div>
        <div className="black">
          <p>Упоминания о компании</p>
        </div>
        <div className="black">
          <p>Обращение к агентстве</p>
        </div>
      </WrapperPress>
    </>
  );
};

export default PersonalTab;
