import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const RankingCard = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperPress id="rankin">
        <h2>{t("Ranking.0")}</h2>
        <p>{t("Ranking.1")}</p>
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
          <NavLink className='links' to="/whatisranking"> {t("Ranking.2")}</NavLink>
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default RankingCard;
