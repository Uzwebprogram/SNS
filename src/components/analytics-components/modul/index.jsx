import React, { useState } from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import ModalCommon from "../../common/Modal/Modal";
import Auth from "../../header/auth";
import Cookies from 'universal-cookie/cjs/Cookies';
import { NavLink } from "react-router-dom";


const Modul = ({ isSelect }) => {
  const arr = [1, 2, 3, 4];
  const cookies = new Cookies();
  const [open , setOpen] = useState(false)
  const HandleOpen = () => setOpen(true)
  const HandleClose = () => setOpen(false)
  return (
    <>
      <WrapperPress>
        <h2>Модуль</h2>
        <p>Информация только для авторизованных пользователей</p>
        {!cookies.get("AuthTokenUser") ?  <p className="red-text">
          Информация будет доступна только после регистрации
        </p> : null}

      {!cookies.get("AuthTokenUser") ? 
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
            Регистрация
          </CommonButton>:  
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
                        <NavLink to={"/lichniykabinet"} >
                        личный кабинет
                        </NavLink>
                    </CommonButton>
    }
      </WrapperPress>
      {!cookies.get("AuthTokenUser") ? 
   <ModalCommon  height={518} handleClose={HandleClose} open={open}>
    <Auth/>
    </ModalCommon> : null } 
    </>
  );
};

export default Modul;
