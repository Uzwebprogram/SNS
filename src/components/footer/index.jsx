import React from 'react'
import { Col , Row } from 'react-grid-system'
import { WrapperContainer } from '../../style-App'
import { Wrapper } from './styled-index'
import Logo from "./../../assets/Header/logo.svg"
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { dataLink } from '../../utils/data-link'
function Footer() {
  const {t , i18n} = useTranslation();
  const dataLinkFooter = [
    {
      id : 1, 
      title: "Footer.3",
      link : "/"
    },
    {
      id : 2, 
      title: "Footer.4",
      link : "/methodology"
    },
    {
      id : 3, 
      title: "Footer.5",
      link : "/disclosure"
    },   
     {
      id : 4, 
      title: "Footer.6",
      link : "/details"
    },
    {
      id : 5, 
      title: "Footer.7",
      link : "/"
    },
    {
      id : 6, 
      title: "Footer.8",
      link : "/"
    }
  ]
  return (
    <Wrapper>
        <WrapperContainer>
            <div className="FooterTop">
               <Row>
                 <Col className='Footer-top-left' lg={3} md={12}>
                    <img src={Logo} width={123} height={35} alt="images logo" />
                    <p>{t("Footer.0")}</p>
                    <span>Узбекистан, г.Ташкент, ул.Бузбозор, 5. </span>
                 </Col>
                 <Col className='Footer-top-ul'  md={12} lg={3}>
                    <ul>
                      <p>{t("Footer.1")}</p>
                      <li>
                            <a href="mailto:info@snsratings.uz">info@snsratings.uz</a>
                      </li>
                    </ul>
                 </Col>
                 <Col className='Footer-top-ul'  md={12} lg={3}>
                    <ul>
                 <p>{t("Footer.2")}</p>
                    {dataLink.map((elem , index) =>
                                <li key={index}>
                                <NavLink style={{textDecoration:"none"}} to={elem.link}>
                                    <a href='#'>{t(elem.title)}</a>
                                </NavLink>
                            </li>
                )}
                    </ul>
                 </Col>
                 <Col className='Footer-top-ul'  md={12} lg={3}>
                    <ul>
                    <p>{t("Footer.2")}</p>
                    {dataLinkFooter.map((elem , index) =>
                                <li key={index}>
                                <NavLink style={{textDecoration:"none"}} to={elem.link}>
                                    <a href='#'>{t(elem.title)}</a>
                                </NavLink>
                            </li>
                )}
                    </ul>
                 </Col>
                </Row>
            </div>
        </WrapperContainer>
                      <hr />
            <WrapperContainer>
            <div className="FooterBoottom">
            <Row>
                 <Col className='Footer-Bottom-left' lg={7} md={12}>
                  <p>{t("Footer.9")}</p>
                  <p>{t("Footer.10")}</p>
                  <p>{t("Footer.11")}</p>
                  <Row >
                    <Col className='Footer-Bottom-left-bottom' lg={7} md={12}>
                      <a href="#">{t("Footer.12")}</a>
                    </Col>
                    <Col lg={5} md={12} className='Footer-Bottom-left-bottom'>
                      <a href="#">{t("Footer.13")}</a>
                    </Col>
                  </Row>
                 </Col>
                 <Col lg={5} md={12} className='Footer-Bottom-right'>
                  <h3>{t("Footer.14")}</h3>
                    <p>
                    {t("Footer.16")}
                    <a href="#">{t("Footer.15")}</a>
                    </p>
                 </Col>
                </Row>
            </div>
            </WrapperContainer>
    </Wrapper>
  )
}

export default Footer