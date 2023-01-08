import React, { useState } from 'react'
import { WrapperContainer } from '../../../style-App'
import { Wrapper } from './styled-index'
import {useTranslation} from "react-i18next"
import LanguageHeader from '../header-language';
import ModalCommon from '../../common/Modal/Modal';
import Auth from '../auth';
function HeaderTop() {
  const {t , i18n} = useTranslation();
  const [open , setOpen] = useState(false)
  const HandleOpen = () => setOpen(true)
  const HandleClose = () => setOpen(false)
  return (
      <>
          <WrapperContainer>
        <Wrapper>
            <a href="mailto:uzexp@gmail.ru">uzexp@gmail.ru</a>
            <a href="tel:+998 (90) 900 00 00">+998 (90) 900 00 00</a>
            <a href="insta"><i class='bx bxl-instagram'></i></a>
            <a href="telegram"><i class='bx bxl-telegram' ></i></a>
            <div>
            <button onClick={HandleOpen}>
              <i class='bx bx-user-circle'></i>
              <p>{t("Header.0")}</p>
              </button>
            </div>
            <LanguageHeader/>
        </Wrapper>
    </WrapperContainer>
    <ModalCommon  height={518} handleClose={HandleClose} open={open}>
    <Auth/>
    </ModalCommon>
      </>
  )
}

export default HeaderTop