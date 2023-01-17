import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";

const PressCenter = () => {
  const arr = [1, 2, 3, 4];
  const {t, i18n} = useTranslation()
  return (
    <>
      <WrapperPress>
        <h2>{t("Home.4")}</h2>
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
         {t("Home.6")}
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default PressCenter;
