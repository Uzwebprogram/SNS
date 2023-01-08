import { useTranslation } from "react-i18next"
import { Wrapper } from "./styled-index"
function SingUp() {
    const {t , i18n} = useTranslation();
    return(
        <Wrapper>
            <label htmlFor="name">{t("Auth.2")}</label>
            <input type="text" placeholder={t("Auth.3")} required />
            <label htmlFor="name">{t("Auth.4")}</label>
            <input type="text"  required />
            <label htmlFor="name">{t("Auth.5")}</label>
            <input type="email"  required />
            <div style={{display:"flex" , marginTop:"10px" , marginBottom:"20px"}}>
            <input type="radio"/>
            <span htmlFor="name">{t("Auth.6")}</span>
            </div>
            <label htmlFor="name">{t("Auth.7")}</label>
            <input type="text" required />
            <label htmlFor="name">{t("Auth.8")}</label>
            <input type="text" required />
            <label htmlFor="name">{t("Auth.9")}</label>
            <input type="password"  required />
            <label htmlFor="name">{t("Auth.10")}</label>
            <input type="password"  required />
            <label htmlFor="name">{t("Auth.11")}</label>
            <input type="password"  required />
            <div style={{display:"flex" , marginTop:"10px" , marginBottom:"20px" ,  marginTop:"20px"}}>
            <input style={{marginRight:"10px"}} type="radio"/>
            <span htmlFor="name" style={{width:"70%"}}>{t("Auth.12")}</span>
            </div>
            <button>{t("Auth.13")}</button>
        </Wrapper>
    )
}
export default SingUp