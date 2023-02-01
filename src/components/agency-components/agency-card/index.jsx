import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";
const AgencyCard = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
    const cookies = new Cookies()
    function GetLanguageValue() {
      return cookies.get("i18next")
    }
  return (
    <>
      <WrapperPress>
        <h2>{t("Agency.0")}</h2>
        <p className="bold-p">{t("Agency.1")}</p>
        <p>{t("Agency.2")}</p>
        <br />
        {GetLanguageValue() == "ru" ? 
                  
                  <>
                  <p><strong>Честные : </strong> Мы искренние, не любим лгать и признаем свои ошибки.</p>
                  <br />   
                   <p><strong>Мы за справедливость : </strong> В своих оценках мы за независимость, объективность, беспристрастность</p>
                   <br />
                   <p><strong>Фокус не результат : </strong> Стать удобным и надежным ресурсом для участников рынка в процессе их принятия деловых и инвестиционных решений</p>
                   <br />
                   <p><strong>Конфиденциальность информации : </strong> Мы несем ответственность за сохранность и безопасность хранения информации</p>
                  </>
                  :GetLanguageValue() == "en" ? 
                <>
                           <p><strong>Honest : </strong> We are sincere, do not like to lie and admit our mistakes.</p>
                   <br />
                    <p><strong>We are for justice: </strong> In our assessments, we are for independence, objectivity, impartiality</p>
                    <br />
                    <p><strong>Focus is not the result : </strong> Become a convenient and reliable resource for market participants in their business and investment decision-making</p>
                    <br />
                    <p><strong>Information privacy : </strong> We are responsible for the safety and security of information storage</p>
                </>:GetLanguageValue() == "uz" ? <>
                <p><strong>Halol : </strong> Biz samimiymiz, yolg‘on gapirishni va xatolarimizni tan olishni yoqtirmaymiz.</p>
                   <br />
                    <p><strong>Biz adolat tarafdorimiz: </strong> Baholarimizda biz mustaqillik, xolislik, xolislik tarafdorimiz</p>
                    <br />
                    <p><strong>Diqqat natija emas : </strong> Bozor ishtirokchilari uchun biznes va investitsiya qarorlarini qabul qilishda qulay va ishonchli manbaga aylaning</p>
                    <br />
                    <p><strong>Ma'lumotlar maxfiyligi : </strong> Biz axborotni saqlash xavfsizligi va xavfsizligi uchun javobgarmiz</p>
                </>:null
      }

      </WrapperPress>
    </>
  );
};

export default AgencyCard;
