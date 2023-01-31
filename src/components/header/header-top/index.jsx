import React, { useState } from 'react'
import { WrapperContainer } from '../../../style-App'
import { Wrapper , Section } from './styled-index'
import {useTranslation} from "react-i18next"
import LanguageHeader from '../header-language';
import ModalCommon from '../../common/Modal/Modal';
import Auth from '../auth';
import Cookies from 'universal-cookie/cjs/Cookies';
import { NavLink } from 'react-router-dom';
function HeaderTop() {
  const {t , i18n} = useTranslation();
  const cookies = new Cookies();
  const [open , setOpen] = useState(false)
  const HandleOpen = () => setOpen(true)
  const HandleClose = () => setOpen(false)
  return (
      <Section>
          <WrapperContainer>
        <Wrapper>
            <a className='tel-gmail' href="mailto:uzexp@gmail.ru">uzexp@gmail.ru</a>
            <a className='tel-gmail tel-none' href="tel:+998 (90) 900 00 00">+998 (90) 900 00 00</a>
            <a href="insta" className='logo-insta'><i class='bx bxl-instagram'></i></a>
            <a href="telegram" className='logo-tg'><i class='bx bxl-telegram' ></i></a>
            <div>
            <button onClick={HandleOpen}>
              {!cookies.get("AuthTokenUser") ?  <i class='bx bx-user-circle'></i> :  <NavLink to="/lichniykabinet"><i class='bx bx-user-circle'></i></NavLink>}
              <p>{!cookies.get("AuthTokenUser") ?  t("Header.0") :  null}</p>
              </button>
            </div>
            <LanguageHeader/>
        </Wrapper>
    </WrapperContainer>
   
   {!cookies.get("AuthTokenUser") ? 
   <ModalCommon  height={518} handleClose={HandleClose} open={open}>
    <Auth/>
    </ModalCommon> : null } 
      </Section>
  )
}

export default HeaderTop