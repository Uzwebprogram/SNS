import { useTranslation } from "react-i18next";
import { Wrapper } from "./styled-index";


function SingUp() {
    const {t , i18n} = useTranslation();

    return(
        <>
        <Wrapper>
        <label htmlFor="name">{t("Auth.5")}</label>
            <input type="text"  required />
            <label htmlFor="name">{t("Auth.16")}</label>
            <input type="text"  required />
            <div style={{display:"flex" , marginTop:"10px" , marginBottom:"20px" ,  marginTop:"20px"}}>
            <input style={{marginRight:"5px"}} type="radio"/>
            <span htmlFor="name" style={{width:"70%"}}>{t("Auth.15")}</span>
            </div>
            <button>{t("Header.0")}</button>  
        </Wrapper>
        </>
    )
}
export default SingUp