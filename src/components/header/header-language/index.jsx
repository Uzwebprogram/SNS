import { useTranslation } from "react-i18next";
import {Wrapper} from './styled-index'
// import Hamburger from "./../../../assets/image/Header/header-hamburger.svg"
import { useState } from "react";
import RusLogo from "./../../../assets/Header/ru-logo.svg"
import UzbLogo from "./../../../assets/Header/uz-flag.png"
import EngLogo from "./../../../assets/Header/en-flag.png"

function LanguageHeader({HandleClick}) {
  const { t, i18n } = useTranslation();
    const handleLang = (e) =>{
        const lang = e.target.value
        i18n.changeLanguage(lang)
        window.location.reload() 
      }
      function LanguValue() {
        return window.localStorage.getItem("i18nextLng")
      }

    return(
        <Wrapper>
                      {LanguValue() === "ru" ?(
                      <img src={RusLogo} width={24} height={18}  alt="" />
            ):LanguValue() === "en" ?(
              <img src={EngLogo} width={32} height={28} alt="" />
    ):LanguValue() === "uz" ?(
      <img src={UzbLogo} width={24} height={18} alt="" />
):null}
          <select onChange={handleLang}>
            {LanguValue() === "ru" ?(
              <>
              <option value="ru"> RU</option>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              </>
            ) 
            : LanguValue() === 'uz'?(
              <>                         
              <option value="uz">UZ</option>
               <option value="ru">RU</option>
              <option value="en">EN</option>
              </>
            ) 
            : LanguValue() === 'en'?(
              <>                         
              <option value="en">EN</option>
              <option value="uz">UZ</option>
               <option value="ru">RU</option>
              </>
            ):(
              <>                         
               <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              </>
            )}
          </select>
          {/* <button onClick={HandleClick}><img src={Hamburger} width={36} height={24} alt="menu" /></button> */}
        </Wrapper>
    )
}
export default LanguageHeader