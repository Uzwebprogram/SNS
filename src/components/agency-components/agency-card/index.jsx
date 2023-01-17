import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";

const AgencyCard = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
  const arr = [1, 2, 3, 4];
  return (
    <>
      <WrapperPress>
        <h2>{t("Agency.0")}</h2>
        <p className="bold-p">{t("Agency.1")}</p>
        <p>{t("Agency.2")}</p>
      </WrapperPress>
    </>
  );
};

export default AgencyCard;
