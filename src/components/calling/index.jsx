import React from "react";
import CommonButton from "../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";

const Calling = ({ isMargin }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperPress isMargin={isMargin}>
        <div className="scales-div">
          <h2>{t("Calling.0")}</h2>
          <div className="call-div">
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
          </div>
        </div>
        <div className="scales-div">
          <h2>{t("Calling.1")}</h2>
          <div className="call-div">
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
          </div>
        </div>
        <div className="scales-div">
          <h2>{t("Calling.2")}</h2>
          <div className="call-div">
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
          </div>
        </div>
        <div className="scales-div">
          <h2>{t("Calling.3")}</h2>
          <input type="email" placeholder="email" />
        </div>
        <CommonButton
          style={{
            color: "#FFFFFF",
            display: "inline-block",
            marginTop: "12px",
            padding: "8px 50px",
            background: "#2F66B8",
          }}
          type={"button"}
        >
          {t("Calling.4")}
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default Calling;
