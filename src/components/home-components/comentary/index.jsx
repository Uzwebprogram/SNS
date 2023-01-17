import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";

const Comentary = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperPress>
        <h2>{t("Home.5")}</h2>

        <div className="press-content">
          <p>ЦБ оставил ключевую ставку неизменной. Что будет с ипотекой?</p>
          <span>Российская газета</span>
          <time>16/12/2021</time>
          <hr />
        </div>
        <div className="press-content">
          <p>
            ЦБ оставил ключевую ставку неизменной. Что будет с ипотекой? ЦБ
            оставил ключевую ставку...Читать полностью
          </p>
          <span>Российская газета</span>
          <time>16/12/2021</time>
          <hr />
        </div>

        <div className="press-content">
          <p>Аукционы ждут дефолтов</p>
          <span>BBC-LET-ME-S</span>
          <time>16/12/2021</time>
          <hr />
        </div>

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
         {t("Home.3")}
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default Comentary;
