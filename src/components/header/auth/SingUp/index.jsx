import { useRef } from "react";
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../../../../redux/auth/singIn";
import { Wrapper } from "./styled-index"
import Cookies from "universal-cookie/cjs/Cookies";
function SingUp() {
    const {t , i18n} = useTranslation();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userRegister.Register)
    const companynameRef = useRef();
    const innRef = useRef();
    const emailRef = useRef();
    const kppRef = useRef();
    const countryRef = useRef();
    const passwordRef = useRef();
    const repeat_passwordRef = useRef();
    const cookies = new Cookies();
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body ={
            companyname : companynameRef.current.value,
            inn : innRef.current.value,
            email : emailRef.current.value,
            ogrn : "no content",
            kpp : "no content",
            country : countryRef.current.value,
            password: passwordRef.current.value,
            repeat_password: repeat_passwordRef.current.value
        }
        await dispatch(Register(body))
    }
    if (result.Success == true) {
        window.location.reload();
    }
    return(
        <Wrapper onSubmit={HandleSubmit}>
            <label htmlFor="name">{t("Auth.2")}</label>
            <input ref={companynameRef} type="text" required />
            {result.Error?.response?.data?.message == 'Already exists' ? <p style={{color: "red"}}> {t("Auth.17")}</p>:null}
            <label  htmlFor="name">{t("Auth.4")}</label>
            <input ref={innRef} type="text"  required />
            <label htmlFor="name">{t("Auth.5")}</label>
            <input   ref={emailRef} type="email"  required />
            <div style={{display:"flex" , marginTop:"10px" , marginBottom:"20px"}}>
            <input type="radio"/>
            <span htmlFor="name">{t("Auth.6")}</span>
            </div>
            <label htmlFor="name">{t("Auth.9")}</label>
            <input ref={countryRef} type="text"  required />
            <label htmlFor="name">{t("Auth.10")}</label>
            <input ref={passwordRef} type="password"  required />
            <label htmlFor="name">{t("Auth.11")}</label>
            <input ref={repeat_passwordRef} type="password"  required />
            {result.Error?.response?.data?.message == '"repeat_password" must be [ref:password]' ? <p style={{color: "red"}}>{t("Auth.18")}</p>:null}
            <div style={{display:"flex" , marginTop:"10px" , marginBottom:"20px" ,  marginTop:"20px"}}>
            <input style={{marginRight:"10px"}} type="radio"/>
            <span htmlFor="name" style={{width:"70%"}}>{t("Auth.12")}</span>
            </div>
            <button>{t("Auth.13")}</button>
        </Wrapper>
    )
}
export default SingUp