import React from "react";
import { Wrapper, Overlay } from "./styled-index";
import Logo from "./../../../assets/Header/logo.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RusLogo from "./../../../assets/Header/ru-flag.svg";
import UzbLogo from "./../../../assets/Header/yz-flag.svg";
import EngLogo from "./../../../assets/Header/en-flag.svg";
import { dataLink } from "./../../../utils/data-link";
function HeaderMobile({ open, HandleClose2 }) {
  const { t, i18n } = useTranslation();
  const handleLang = (e) => {
    const lang = e.target.id;
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  return (
    <>
      <Wrapper open={open}>
        <div className="Top">
          <img src={Logo} alt="" />
          <span onClick={HandleClose2}>&times;</span>
        </div>
        <ul>
          {dataLink.map((elem, index) => (
            <li key={index}>
              <NavLink
                style={{ textDecoration: "none" }}
                onClick={() => HandleClose2()}
                to={elem.link}
              >
                <p>{t(elem.title)}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flags">
          <button onClick={handleLang} id="ru">
            <img id="ru" src={RusLogo} width={25} height={20} alt="" />
          </button>
          <button onClick={handleLang} id="uz">
            <img id="uz" src={UzbLogo} width={25} height={20} alt="" />
          </button>
          <button onClick={handleLang} id="en">
            <img id="en" src={EngLogo} width={25} height={20} alt="" />
          </button>
        </div>
        <p>{t("Header.8")}</p>
        <a href="tel:+998 (90) 900 00 00">+998 (90) 900 00 00</a>
        <br />
        <a href="tel:+998 (90) 900 00 00">+998 (90) 900 00 00</a>
      </Wrapper>
      <Overlay onClick={HandleClose2} open={open}></Overlay>
    </>
  );
}

export default HeaderMobile;
