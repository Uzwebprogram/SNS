import React from "react";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";

const DetailsComentary = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperPress>
        <h2>{t("Details.6")}</h2>

        <div className="press-content">
          <p>{t("Details.7")}</p>
          <time>16/12/2021</time>
          <hr />
        </div>
        <div className="press-content">
          <p>{t("Details.7")}</p>
          <time>16/12/2021</time>
          <hr />
        </div>
      </WrapperPress>
    </>
  );
};

export default DetailsComentary;
