import React from "react";
import { Wrapper, Overlay } from "./styled-index";
import Logo from "./../../../assets/Header/logo.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RusLogo from "./../../../assets/Header/ru-flag.svg";
import UzbLogo from "./../../../assets/Header/yz-flag.svg";
import EngLogo from "./../../../assets/Header/en-flag.svg";
import { dataLink } from "./../../../utils/data-link";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function HeaderMobile({ open, HandleClose2 }) {
  const { t, i18n } = useTranslation();
  const handleLang = (e) => {
    const lang = e.target.id;
    i18n.changeLanguage(lang);
    window.location.reload();
  };

  const items = [
    {
      label: <NavLink
        style={{ textDecoration: "none" }}
        onClick={() => HandleClose2()}
        to='/uslugi/uslugirating'
      >
        <p className='header_link_texts'>{t("Header.10")}</p>
      </NavLink>,
      key: '0',
    },
    {
      label: <NavLink
        style={{ textDecoration: "none" }}
        onClick={() => HandleClose2()}
        to='/uslugi/uslugianalytic'
      >
        <p className='header_link_texts'>{t("Header.11")}</p>
      </NavLink>,
      key: '1',
    },
    {
      label: <NavLink
        style={{ textDecoration: "none" }}
        onClick={() => HandleClose2()}
        to='/uslugi/uslugifinance'
      >
        <p className='header_link_texts'>{t("Header.12")}</p>
      </NavLink>,
      key: '3',
    },
  ];

  return (
    <>
      <Wrapper open={open}>
        <div className="Top">
          <img src={Logo} alt="" />
          <span onClick={HandleClose2}>&times;</span>
        </div>
        {/* <ul>
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
        </ul> */}
        <ul>
          {/* {dataLink.map((elem, index) => ( */}
          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => HandleClose2()}
              to='/ratings'
            >
              <p>{t("Header.2")}</p>
            </NavLink>
          </li>

          <li >
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => HandleClose2()}
              to='/ranking'
            >
              <p>{t("Header.3")}</p>
            </NavLink>
          </li>
          <li >
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => HandleClose2()}
              to='/analytics'
            >
              <p>{t("Header.4")}</p>
            </NavLink>
          </li>
          <li className="drop_li">
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >

              <Space>
                {t("Header.5")}
                <DownOutlined />
              </Space>

            </Dropdown>
          </li>
          <li >
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => HandleClose2()}
              to="/consultant"
            >
              <p>{t("Header.6")}</p>
            </NavLink>
          </li>
          <li >
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => HandleClose2()}
              to="/faq"
            >
              <p>{t("Header.7")}</p>
            </NavLink>
          </li>

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
