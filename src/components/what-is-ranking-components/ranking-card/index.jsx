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
          <strong>Рейтинг</strong> – играют важную роль для снижения информационной неопределенности при взаимодействии между субъектом рейтингования и его партнерами и клиентами. 
    Суть информационной неопределенности рассмотрим на примере кредитного рейтинга:
    Например, кредитор (инвестор или компания) хочет вложиться – в компанию или в ценную бумагу (кто нуждается в привлечении капитала), но вопрос в том, что не всегда кредитор доверяет заемщику. Проблема в том, что у кредитора отсутствует достаточная информация о компании и о финансовых инструментах. Проблему информационного голода для принятия решения частично решается за счет использования рейтингов, предоставляющих существенную дополнительную информацию рынку. 
    Проблема недостатка информации у кредитора и заемщика влечет две глобальные проблемы:
    <br />
    1. Опасение “ложного выбора” из-за возможности потери предоставляемых в долг средств;
    <br />
    2. Моральные риски – связанные с нецелевым и неоговоренным использованием средств заемщиком. (может это всё проиллюстрируем?)
    Таким образом кредитор вынужден осуществлять мониторинг заемщика, собирать информацию о нем, прогнозировать его финансовую стабильность 
    И оценивать риски невозврата предоставленного кредита. Рейтинги оказывают содействие ему в этом вопросе.
    <br />
    <strong>Важность</strong> – польза присвоенного рейтинга отличается в зависимости от статуса участника:
        </p>
        <p>
        1. Эмитент – наличие рейтинга позволяет облегчить выход капитала на рынок и привлечь инвестиции под более 
        <br />
    низкую процентную ставку.
    <br />
    2. Инвестор – рейтинг ориентирует по отношению приемлемости или неприемлемости вложения денежных средств
    в ценные бумаги выбранного эмитента.
    <br />
    3. Компания – сможет выявить текущие проблемы бизнеса и подумать, как их можно устранить
        </p>
        <p>
        <strong>Виды рейтинга:</strong>
    <br />
-  Рейтинг кредитоспособности и надежности компаний
<br />
-  Рейтинг платежеспособности и надежности (для страховых компаний)
<br />
-  Рейтинг качества и надежности обслуживания клиентов
<br />
-  Рейтинг привлекательности ценных бумаг (акции, облигации)
<br />
-  Экпресс-Рейтинг
<br /><strong>Шкала: (раскрывающийся список)</strong>
<br />
<strong>Вместе с рейтингом получают:</strong> подробный рейтинговый отчет, будет под наблюдением 12 месяцев, прогноз
Процесс присвоения рейтинга: <strong>(раскрывающийся список)</strong>
        </p>
              </>
        ) 
        
        : GetLanguageValue() == "uz" ? <>
        <p>
          <strong>Reyting</strong> - reyting sub'ekti va uning hamkorlari va mijozlari o'rtasidagi o'zaro munosabatlarda axborot noaniqligini kamaytirishda muhim rol o'ynaydi.
    Kredit reytingi misolida axborot noaniqligining mohiyatini ko'rib chiqamiz:
    Misol uchun, kreditor (investor yoki kompaniya) kompaniyaga yoki qimmatli qog'ozga sarmoya kiritmoqchi (kimga kapital jalb qilish kerak), ammo muammo shundaki, qarz beruvchi har doim ham qarz oluvchiga ishonmaydi. Muammo shundaki, qarz beruvchi kompaniya va moliyaviy vositalar haqida etarli ma'lumotga ega emas. Qaror qabul qilishda axborot ochligi muammosi bozorga sezilarli qo'shimcha ma'lumotlarni taqdim etadigan reytinglardan foydalanish orqali qisman hal qilinadi.
    Qarz beruvchi va qarz oluvchidan ma'lumot etishmasligi muammosi ikkita global muammolarni keltirib chiqaradi:
    <br />
    1. Qarz qilingan mablag'larni yo'qotish ehtimoli tufayli "noto'g'ri tanlov" qo'rquvi;
    <br />
    2. Ma'naviy xavflar - qarz oluvchi tomonidan mablag'larni noto'g'ri ishlatish va maqsadsiz foydalanish bilan bog'liq. (buni tasvirlab bera olamizmi?)
    Shunday qilib, qarz beruvchi qarz oluvchini kuzatishga, u haqida ma'lumot to'plashga, uning moliyaviy barqarorligini bashorat qilishga majbur
    Va kreditni to'lamaslik xavfini baholang. Bu masalada unga reytinglar yordam beradi.
    <br />
    <strong>Muhimlik</strong> - tayinlangan reytingning foydaliligi ishtirokchining holatiga qarab farqlanadi:
        </p>
        <p>
        1. Emitent - reytingning mavjudligi kapitalning bozorga kirishini va ko'proq ostida investitsiyalarni jalb qilishni osonlashtiradi
        <br />
    past foiz stavkasi.
    <br />
    2. Investor - pulni investitsiya qilishning maqbul yoki nomaqbulligiga nisbatan reyting yo'nalishi
    tanlangan emitentning qimmatli qog'ozlariga.
    <br />
    3. Kompaniya - mavjud biznes muammolarini aniqlay oladi va ularni qanday bartaraf etish haqida o'ylaydi
        </p>
        <p>
        <strong>Baho turlari:</strong>
    <br />
- kompaniyalarning kreditga layoqatliligi va ishonchliligi reytingi
<br />
- to'lov qobiliyati va ishonchlilik reytingi (sug'urta kompaniyalari uchun)
<br />
- mijozlarga xizmat ko'rsatish sifati va ishonchliligi reytingi
<br />
- qimmatli qog'ozlarning jozibadorligi reytingi (aksiya, obligatsiyalar)
<br />
- Ekspress reyting
<br /><strong>Mashtab: (ochiladigan ro'yxat)</strong>
<br />
<strong>Reytingni olish bilan birga:</strong>batafsil reyting hisoboti, 12 oy davomida nazorat qilinadi, prognoz
Baholash jarayoni: <strong>(ochiladigan roʻyxat)</strong>
        </p> 
       </> : GetLanguageValue() == "en" ? <>
       <p>
          <strong>Rating</strong> - play an important role in reducing information uncertainty in the interaction between the rating subject and its partners and clients.
    Let us consider the essence of information uncertainty using the example of a credit rating:
    For example, a lender (an investor or a company) wants to invest in a company or a security (who needs to raise capital), but the issue is that the lender does not always trust the borrower. The problem is that the lender does not have sufficient information about the company and financial instruments. The problem of information hunger for decision-making is partially solved by using ratings, which provide significant additional information to the market.
    The problem of lack of information from the lender and the borrower entails two global problems:
    <br />
    1. Fear of a “false choice” due to the possibility of losing loaned funds;
    <br />
    2. Moral hazards - associated with the misuse and unspecified use of funds by the borrower. (can we illustrate this?)
    Thus, the lender is forced to monitor the borrower, collect information about him, predict his financial stability
    And assess the risks of non-repayment of the loan. Ratings assist him in this matter.
    <br />
    <strong>Importance</strong> - the usefulness of the assigned rating differs depending on the status of the participant:
        </p>
        <p>
        1. Issuer - the presence of a rating makes it easier for capital to enter the market and attract investments under more
        <br />
    low interest rate.
    <br />
    2. Investor - the rating orients in relation to the acceptability or unacceptability of investing money
    into securities of the selected issuer.
    <br />
    3. Company - will be able to identify current business problems and think about how they can be eliminated
        </p>
        <p>
        <strong>Rating types:</strong>
    <br />
- Rating of creditworthiness and reliability of companies
<br />
- Rating of solvency and reliability (for insurance companies)
<br />
- Rating of quality and reliability of customer service
<br />
- Rating of the attractiveness of securities (stocks, bonds)
<br />
- Express Rating
<br /><strong>Scale: (drop-down list)</strong>
<br />
<strong>Together with the rating receive:</strong> detailed rating report, will be monitored for 12 months, forecast
Rating process: <strong>(dropdown list)</strong>
        </p>
       </> : null }
        

      </WrapperPress>
    </>
  );
};

export default RankingCard;
