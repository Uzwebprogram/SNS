import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";

const RatingScales = () => {
  return (
    <>
      <WrapperPress>
        <div className="scales-div">
          <h2>Рейтинговые шкалы</h2>
          <p>
            Рейтинговые шкалы, используемые «Эксперт РА», прогнозы по рейтингам
            и cтатус «под наблюдением»
          </p>
          <CommonButton
            style={{
              color: "#1E1E1E",
              borderColor: "#1E1E1E",
              display: "inline-block",
              marginTop: "12px",
              padding: "8px 50px",
            }}
            type={"button"}
          >
            Подробнее
          </CommonButton>
        </div>
        <div className="scales-div">
          <h2>Зачем нужен рейтинг?</h2>
          <p>
            Перечень нормативных и иных актов, содержащих требования о наличии
            кредитных рейтингов АО "Эксперт РА"
          </p>
          <CommonButton
            style={{
              color: "#1E1E1E",
              borderColor: "#1E1E1E",
              display: "inline-block",
              marginTop: "12px",
              padding: "8px 50px",
            }}
            type={"button"}
          >
            Подробнее
          </CommonButton>
        </div>
      </WrapperPress>
    </>
  );
};

export default RatingScales;
