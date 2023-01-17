import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";

const RatingScales = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperPress>
        <div className="scales-div">
          <h2>{t("Rating.8")}</h2>
          <p>{t("Rating.9")}</p>
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
            {t("Rating.10")}
          </CommonButton>
        </div>
        <div className="scales-div">
          <h2>{t("Rating.11")}</h2>
          <p>{t("Rating.12")}</p>
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
            {t("Rating.10")}
          </CommonButton>
        </div>
      </WrapperPress>
    </>
  );
};

export default RatingScales;
