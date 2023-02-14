import Cookies from "universal-cookie/cjs/Cookies";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../../../redux/auth/singUp";
import { Wrapper } from "./styled-index";


function SingIn() {
    const {t , i18n} = useTranslation();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userLogin.Login)
    const emailRef = useRef();
    const passwordRef = useRef();
    const cookies = new Cookies();
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body ={
            email : emailRef.current.value,
            password: passwordRef.current.value,
        }
        await dispatch(Login(body))
    }
    if (result.Success == true) {
        window.location.reload();
    }
    return(
        <>
        <Wrapper onSubmit={HandleSubmit}>
        <label htmlFor="name">{t("Auth.5")}</label>
            <input ref={emailRef} type="text"  required />
            <label htmlFor="name">{t("Auth.16")}</label>
            <input  ref={passwordRef} type="password"  required />
            <div style={{display:"flex" , marginTop:"10px" , marginBottom:"20px" ,  marginTop:"20px"}}>
            <input  style={{marginRight:"5px"}} type="radio"/>
            <span htmlFor="name" style={{width:"70%"}}>{t("Auth.15")}</span>
            </div>
             {result.Error?.response?.data?.message == "email or  password" ? <p style={{color:"red"}}>{t("Auth.19")}</p> : null } 
            <button type="submit">{t("Header.0")}</button>  
        </Wrapper>
        </>
    )
}
export default SingIn