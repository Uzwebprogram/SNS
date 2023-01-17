import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

const RankingCard = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
  const arr = [1, 2, 3, 4];
  return (
    <>
      <WrapperPress>
        <h2>{t("Ranking.0")}</h2>
        <p>{t("Ranking.1")}</p>
      </WrapperPress>
    </>
  );
};

export default RankingCard;
