import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";

const PressCenter = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <WrapperPress>
        <h2>Пресс-центр</h2>
        {arr.map(() => (
          <div className="press-content">
            <p>
              «Эксперт РА» сообщает об обновлении методологии присвоения
              рейтингов кредитоспособности проектным компаниям
            </p>
            <time>16/12/2021</time>
            <hr />
          </div>
        ))}
        <CommonButton
          style={{
            color: "#1E1E1E",
            borderColor: "#1E1E1E",
            display: "inline-block",
            marginTop: "30px",
            padding: "8px 30px",
          }}
          type={"button"}
        >
          Все новости
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default PressCenter;
