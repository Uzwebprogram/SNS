import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";

const Surway = ({isMargin}) => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <WrapperPress isMargin={isMargin}>
        <h2>Пройдите опрос</h2>
        <p>
          «Эксперт РА» сообщает об обновлении методологии присвоения рейтингов
          кредитоспособности проектным компаниям
        </p>
        <CommonButton
          style={{
            color: "#FFFFFF",
            background: "#208B0E",
            display: "inline-block",
            marginTop: "30px",
            padding: "8px 30px",
          }}
          type={"button"}
        >
          Посмотреть все
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default Surway;
