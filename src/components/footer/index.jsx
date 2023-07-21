import React from "react";
import { Col, Row } from "react-grid-system";
import { WrapperContainer } from "../../style-App";
import { Wrapper } from "./styled-index";
import Logo from "./../../assets/Header/logo.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { dataLink } from "../../utils/data-link";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import './style.css'
function Footer() {
  const { t, i18n } = useTranslation();
  const dataLinkFooter = [

    {
      id: 2,
      title: "Footer.4",
      link: "/methodology",
    },
    {
      id: 3,
      title: "Footer.5",
      link: "/disclosure",
    },
    {
      id: 4,
      title: "Footer.6",
      link: "/details",
    },
    {
      id: 5,
      title: "Footer.7",
      link: "/",
    },
    {
      id: 6,
      title: "Footer.8",
      link: "/",
    },
  ];
  const items = [
    {
      label: <NavLink
        style={{ textDecoration: "none" }}
        to='/uslugi/uslugirating'
      >
        <p className='header_link_texts'>{t("Header.10")}</p>
      </NavLink>,
      key: '0',
    },
    {
      label: <NavLink
        style={{ textDecoration: "none" }}
        to='/uslugi/uslugianalytic'
      >
        <p className='header_link_texts'>{t("Header.11")}</p>
      </NavLink>,
      key: '1',
    },
    {
      label: <NavLink
        style={{ textDecoration: "none" }}
        to='/uslugi/uslugifinance'
      >
        <p className='header_link_texts'>{t("Header.12")}</p>
      </NavLink>,
      key: '3',
    },
  ];
  return (
    <Wrapper>
      <WrapperContainer>
        <div className="FooterTop">
          <Row className="footer_row">
            <Col className="Footer-top-left" lg={2} md={12}>
              <img src={Logo} width={123} height={35} alt="images logo" />
            </Col>
            <Col className="Footer-top-ul" md={12} lg={4}>
              <ul>
                <p>{t("Footer.1")}</p>
                <li>
                  <a href="mailto:info@snsratings.uz">info@snsratings.uz</a>
                </li>
                <li>
                  <p>{t("Footer.0")}</p>
                  <span>{t("Footer.17")}</span>
                </li>
              </ul>
            </Col>
            <Col className="Footer-top-ul" md={12} lg={3}>
              <ul>
                <p>{t("Footer.2")}</p>
                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to='/ratings'
                  >
                    <a href="#">{t("Header.2")}</a>
                  </NavLink>
                </li>

                <li >
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to='/ranking'
                  >
                    <a href="#">{t("Header.3")}</a>
                  </NavLink>
                </li>
                <li >
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to='/analytics'
                  >
                    <a href="#">{t("Header.4")}</a>
                  </NavLink>
                </li>
                <li >
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
                    to="/consultant"
                  >
                    <a href="#">{t("Header.6")}</a>
                  </NavLink>
                </li>
                <li >
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="/faq"
                  >
                    <a href="#">{t("Header.7")}</a>
                  </NavLink>
                </li>

              </ul>
            </Col>
            <Col className="Footer-top-ul" md={12} lg={3}>
              <ul>
                <p>{t("Footer.2")}</p>
                {dataLinkFooter.map((elem, index) => (
                  <li key={index}>
                    <NavLink style={{ textDecoration: "none" }} to={elem.link}>
                      <a href="#">{t(elem.title)}</a>
                    </NavLink>
                  </li>
                ))}
              </ul>

            </Col>
          </Row>
        </div>
      </WrapperContainer>
      <hr />
      <WrapperContainer>
        <div className="FooterBoottom">
          <Row className="footer_row">
            <Col className="Footer-Bottom-left" lg={12} md={12}>
              <p>{t("Footer.9")}</p>
              <p>{t("Footer.10")}</p>
              <p>{t("Footer.11")}</p>
            </Col>
          </Row>
        </div>
      </WrapperContainer>
    </Wrapper>
  );
}

export default Footer;
