import React from 'react'
import { Wrapper ,Overlay} from './styled-index'
import Logo from "./../../../assets/Header/logo.png"
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import RusLogo from "./../../../assets/Header/ru-flag.svg"
import UzbLogo from "./../../../assets/Header/yz-flag.svg"
import EngLogo from "./../../../assets/Header/en-flag.svg"

function HeaderMobile({open , HandleClose}) {
    const {t , i18n} = useTranslation();
    const handleLang = (e) =>{
        const lang = e.target.id
        i18n.changeLanguage(lang)
        window.location.reload() 
      }
    const dataLink = [
        {
            id: 1,
            title : "Header.2",
            link : "/"
        },
        {
            id: 2,
            title : "Header.3",
            link : "/"
        },
        {
            id: 3,
            title : "Header.4",
            link : "/"
        },
        {
            id: 4,
            title : "Header.5",
            link : "/"
        },        
        {
            id: 5,
            title : "Header.6",
            link : "/"
        },
        {
            id: 6,
            title : "Header.7",
            link : "/"
        },
    ]
  return (
        <>
            <Wrapper open={open}>
        <div className="Top">
            <img src={Logo} alt="" />
            <span onClick={HandleClose}>&times;</span>
        </div>
        <ul>
                {dataLink.map((elem , index) =>
                                <li key={index}>
                                <NavLink style={{textDecoration:"none"}} to="/">
                                    <p>{t(elem.title)}</p>
                                </NavLink>
                            </li>
                )}
            </ul>
                    <div className="flags">
                        <button onClick={handleLang} id='ru'><img id='ru' src={RusLogo} width={25} height={20} alt="" /></button>
                        <button onClick={handleLang} id='uz'><img id='uz' src={UzbLogo} width={25} height={20} alt="" /></button>
                        <button onClick={handleLang} id='en'><img id='en' src={EngLogo} width={25} height={20} alt="" /></button>
                    </div>
                            <p>{t("Header.8")}</p>
                            <a href="tel:+998 (90) 900 00 00">+998 (90) 900 00 00</a>
                            <br />
                            <a href="tel:+998 (90) 900 00 00">+998 (90) 900 00 00</a>
        </Wrapper>
    <Overlay onClick={HandleClose} open={open}>
    </Overlay>
        </>
  )
}

export default HeaderMobile