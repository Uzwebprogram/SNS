import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

const Surway = ({isMargin}) => {
  const {t, i18n} = useTranslation()
  const arr = [1, 2, 3, 4];
  return (
    <>
      <WrapperPress isMargin={isMargin}>
        <h2>{t("Analytic.0")}</h2>
        <p>
        {t("Analytic.1")}
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
          {t("Analytic.2")}
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default Surway;
