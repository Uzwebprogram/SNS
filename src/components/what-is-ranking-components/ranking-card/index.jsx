import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";

const RankingCard = () => {
  const { t, i18n } = useTranslation();
  const cookies = new Cookies()
  function GetLanguageValue() {
    return cookies.get("i18next")
  }
  return (
    <>
      <WrapperPress>
        <h2>{t("Ranking.0")}</h2>
        {GetLanguageValue() == "ru" ? (
              <>
              <p>
          <strong>Ренкинг</strong>— список объектов (как правило, организаций), упорядоченный по определённому критерию, параметру или показателю.
    <br />
    Ренкинги применяются в экономике, бизнесе, маркетинге, спорте — в сферах, где есть необходимость по определённому числовому параметру отранжировать список компаний, претендентов, предложений, участников и т. п.Так, существуют ренкинги кредитных и микрофинансовых организаций, страховых и лизинговых компаний, контрагентов и т. д. Например, по ренкингу банков можно сделать вывод о том, в каком из них больше ставки по процентам.
    <br />
    Понятие «ренкинг» нередко путают с термином «рейтинг». В основе любого рейтинга лежит субъективная оценка, которая основывается либо на конкретном критерии, либо на определённой системе расчёта (возрастные рейтинги, рейтинг популярности телепрограммы и т. п.). Ренкинг же в большей степени относится к статистическим данным. Его отличительная черта — объективность результата ранжирования. В отличие от рейтинга, ренкинг не ставит своей целью что-либо оценивать — он даёт возможность точно «откалибровать» исходный список по интересующему признаку. При составлении ренкинга не требуется экспертное мнение — только точные данные.
    <br />
    <strong>Нюансы:</strong>
        </p>
        <p>
        - Типовые показатели ренкинга, на основании которых производится ранжирование:
        <br />
        - Економические (размер прибыли, платёжеспособность и пр.);
    <br />
    - Натуральные (объём производства в штуках готовой продукции и пр.);
    <br />
    - Несмотря на кажущееся преимущество ренкинга перед рейтингом, второй термин более известен неспециалистам. Он же чаще упоминается в СМИ, также есть специальные рейтинговые агентства.
    - Статистические (численность населения, количество покупок и пр.).
        </p>
        <p>
        </p>
              </>
        ) 
        
        : GetLanguageValue() == "uz" ? <>
<p>
           <strong>Reyting</strong> - bu ma'lum bir mezon, parametr yoki ko'rsatkich bo'yicha tartiblangan ob'ektlar (odatda tashkilotlar) ro'yxati.
     <br />
     Reytinglar iqtisod, biznes, marketing, sport sohalarida - kompaniyalar ro'yxatini, ariza beruvchilar, takliflar, ishtirokchilar va boshqalarni ma'lum bir raqamli parametr bo'yicha tartiblash zarurati bo'lgan sohalarda qo'llaniladi.Shunday qilib, kredit va mikromoliya tashkilotlari reytinglari mavjud. , sug'urta va lizing kompaniyalari, pudratchilar va boshqalar. Masalan, banklar reytingiga ko'ra, ulardan qaysi biri yuqori foiz stavkasiga ega degan xulosaga kelish mumkin.
     <br />
     “Reyting” tushunchasi ko‘pincha “reyting” atamasi bilan chalkashib ketadi. Har qanday reyting sub'ektiv baholashga asoslangan bo'lib, u ma'lum bir mezonga yoki ma'lum bir hisoblash tizimiga (yosh reytinglari, teledasturning mashhurlik reytingi va boshqalar) asoslanadi. Reyting ko'proq statistik ma'lumotlar bilan bog'liq. Uning ajralib turadigan xususiyati reyting natijasining ob'ektivligidir. Reytingdan farqli o'laroq, reyting hech narsani baholashni maqsad qilmaydi - bu asl ro'yxatni qiziqish atributiga ko'ra aniq "kalibrlash" imkonini beradi. Reytingni tuzishda ekspert xulosasi talab qilinmaydi - faqat aniq ma'lumotlar.
     <br />
     <strong>Nyuanslar:</strong>
         </p>
         <p>
         - Reyting tuziladigan tipik reyting ko'rsatkichlari:
         <br />
         - iqtisodiy (foydali marja, to'lov qobiliyati va boshqalar);
     <br />
     - tabiiy (tayyor mahsulot bo'laklarida ishlab chiqarish hajmi va boshqalar);
     <br />
     - Reytingdan ko'ra ko'rinib turgan ustunlikka qaramay, ikkinchi muddat mutaxassis bo'lmaganlarga yaxshi ma'lum. U ommaviy axborot vositalarida tez-tez tilga olinadi, maxsus reyting agentliklari ham bor.
     - Statistik (aholi soni, xaridlar soni va boshqalar).
         </p>
         <p>
         </p>
       </> : GetLanguageValue() == "en" ? <>
       <p>
           <strong>Ranking</strong> is a list of objects (usually organizations) ordered by a certain criterion, parameter or indicator.
     <br />
     Rankings are used in economics, business, marketing, sports - in areas where there is a need to rank the list of companies, applicants, proposals, participants, etc. by a certain numerical parameter. Thus, there are rankings of credit and microfinance organizations, insurance and leasing companies, contractors etc. For example, according to the ranking of banks, one can conclude which of them has a higher interest rate.
     <br />
     The concept of "ranking" is often confused with the term "rating". Any rating is based on a subjective assessment, which is based either on a specific criterion or on a certain calculation system (age ratings, popularity rating of a TV program, etc.). Ranking is more related to statistical data. Its distinguishing feature is the objectivity of the ranking result. Unlike rating, ranking does not aim to evaluate anything - it makes it possible to accurately “calibrate” the original list according to the attribute of interest. When compiling the ranking, no expert opinion is required - only accurate data.
     <br />
     <strong>Nuances:</strong>
         </p>
         <p>
         - Typical ranking indicators, on the basis of which the ranking is made:
         <br />
         - Economic (profit margin, solvency, etc.);
     <br />
     - Natural (production volume in pieces of finished products, etc.);
     <br />
     - Despite the apparent advantage of ranking over rating, the second term is better known to non-specialists. He is more often mentioned in the media, there are also special rating agencies.
     - Statistical (population, number of purchases, etc.).
         </p>
         <p>
         </p>
       </> : null }
        

      </WrapperPress>
    </>
  );
};

export default RankingCard;
