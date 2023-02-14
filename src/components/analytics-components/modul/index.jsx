import React, { useState } from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import ModalCommon from "../../common/Modal/Modal";
import Auth from "../../header/auth";
import Cookies from "universal-cookie/cjs/Cookies";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Modul = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
  const arr = [1, 2, 3, 4];
  const cookies = new Cookies();
  const [open, setOpen] = useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);
  return (
    <>
      <WrapperPress>
        <h2>{t("Analytic.3")}</h2>
        <p>{t("Analytic.4")}</p>
        {!cookies.get("AuthTokenUser") ? (
          <p className="red-text">{t("Analytic.5")}</p>
        ) : null}

        {!cookies.get("AuthTokenUser") ? (
          <CommonButton
            style={{
              color: "#1E1E1E",
              borderColor: "#1E1E1E",
              display: "inline-block",
              marginTop: "30px",
              padding: "8px 30px",
            }}
            type={"button"}
            onClick={HandleOpen}
          >
            {t("Analytic.6")}
          </CommonButton>
        ) : (
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
            <NavLink className='personal-link' to={"/lichniykabinet"}>{t("Analytic.67")}</NavLink>
          </CommonButton>
        )}
      </WrapperPress>
      {!cookies.get("AuthTokenUser") ? (
        <ModalCommon height={518} handleClose={HandleClose} open={open}>
          <Auth />
        </ModalCommon>
      ) : null}
    </>
  );
};

export default Modul;
