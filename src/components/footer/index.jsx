import React from 'react'
import { Col , Row } from 'react-grid-system'
import { WrapperContainer } from '../../style-App'
import { Wrapper } from './styled-index'
import Logo from "./../../assets/Header/logo.png"
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
      link : "/"
    },
    {
      id : 3, 
      title: "Footer.5",
      link : "/"
    },   
     {
      id : 4, 
      title: "Footer.6",
      link : "/"
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
                 <Col className='Footer-top-left' lg={3}>
                    <img src={Logo} width={123} height={35} alt="images logo" />
                    <p>{t("Footer.0")}</p>
                    <span>Представленная информация предназначена для использования </span>
                 </Col>
                 <Col className='Footer-top-ul' lg={3}>
                    <ul>
                      <p>{t("Footer.1")}</p>
                      <li>
                            <a href="tel:+998990202020">+998 (90) 900 00 00</a>
                      </li>
                      <li>
                            <a href="tel:+998990202020">+998 (90) 900 00 00</a>
                      </li>
                      <li>
                            <a href="mailto:sns.uz@gmail.ru">sns.uz@gmail.ru</a>
                      </li>
                    </ul>
                 </Col>
                 <Col className='Footer-top-ul' lg={3}>
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
                 <Col className='Footer-top-ul' lg={3}>
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
            <div className="FooterBoottom">
            <Col>
                 <Row>
                    
                 </Row>
                </Col>
            </div>
        </WrapperContainer>
    </Wrapper>
  )
}

export default Footer