import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const RatingScales = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperPress>
        <div className="scales-div">
          <h2>{t("Ranking.4")}</h2>
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
            <NavLink className="links" to="/uslugi/uslugirating">
              {" "}
              {t("Rating.10")}
            </NavLink>
          </CommonButton>
        </div>
   
      </WrapperPress>
    </>
  );
};

export default RatingScales;
