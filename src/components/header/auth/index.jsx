import { useState } from "react";
import { useTranslation } from "react-i18next";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import { Wrapper } from "./styled-index";

function Auth() {
  const { t, i18n } = useTranslation();
  const [authButton, setAuthButton] = useState(false);
  function LanguageValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  return (
    <Wrapper>
        <h2>{authButton ? t("Auth.1") : t("Auth.0")}</h2>
      <div
        className="buttons"
        style={LanguageValue() == "uz" ? { width: "340px" } : { width: "300px" }}
      >
        {authButton ? (
          <button className="left-button" onClick={() => setAuthButton(false)}>
            {t("Auth.0")}
          </button>
        ) : (
          <button className="right-button">{t("Auth.0")}</button>
        )}

        {authButton == true ? (
          <button className="right-button">{t("Auth.1")}</button>
        ) : (
          <button className="left-button" onClick={() => setAuthButton(true)}>
            {t("Auth.1")}
          </button>
        )}
      </div>
            {authButton ? <SingIn/> :  <SingUp/> }
    </Wrapper>
  );
}
export default Auth;
