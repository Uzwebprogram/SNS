import { useRef } from "react";
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../../../../redux/auth/singIn";
import { Wrapper } from "./styled-index"
function SingIn() {
    const {t , i18n} = useTranslation();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userRegister.Register)
    const companynameRef = useRef();
    const innRef = useRef();
    const emailRef = useRef();
    const ogrnRef = useRef();
    const kppRef = useRef();
    const countryRef = useRef();
    const passwordRef = useRef();
    const repeat_passwordRef = useRef();
    console.log(result);
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body ={
            companyname : companynameRef.current.value,
            inn : innRef.current.value,
            email : emailRef.current.value,
            ogrn : ogrnRef.current.value,
            kpp : kppRef.current.value,
            country : countryRef.current.value,
            password: passwordRef.current.value,
            repeat_password: repeat_passwordRef.current.value
        }
        console.log(body);
        await dispatch(Register(body))
    }
    return(
        <Wrapper onSubmit={HandleSubmit}>
            <label htmlFor="name">{t("Auth.2")}</label>
            <input ref={companynameRef} type="text" placeholder={t("Auth.3")} required />
            <label  htmlFor="name">{t("Auth.4")}</label>
            <input ref={innRef} type="text"  required />
            <label htmlFor="name">{t("Auth.5")}</label>
            <input   ref={emailRef} type="email"  required />
            <div style={{display:"flex" , marginTop:"10px" , marginBottom:"20px"}}>
            <input type="radio"/>
            <span htmlFor="name">{t("Auth.6")}</span>
            </div>
            <label htmlFor="name">{t("Auth.7")}</label>
            <input ref={ogrnRef}  type="text" required />
            <label htmlFor="name">{t("Auth.8")}</label>
            <input  ref={kppRef} type="text" required />
            <label htmlFor="name">{t("Auth.9")}</label>
            <input ref={countryRef} type="text"  required />
            <label htmlFor="name">{t("Auth.10")}</label>
            <input ref={passwordRef} type="password"  required />
            <label htmlFor="name">{t("Auth.11")}</label>
            <input ref={repeat_passwordRef} type="password"  required />
            <div style={{display:"flex" , marginTop:"10px" , marginBottom:"20px" ,  marginTop:"20px"}}>
            <input style={{marginRight:"10px"}} type="radio"/>
            <span htmlFor="name" style={{width:"70%"}}>{t("Auth.12")}</span>
            </div>
            <button>{t("Auth.13")}</button>
        </Wrapper>
    )
}
export default SingIn