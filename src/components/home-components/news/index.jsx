import React, { useEffect } from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";
import { GetNews } from "../../../redux/news";
import { useDispatch, useSelector } from "react-redux";

const News = () => {
  const arr = [1, 2, 3];
  const { t, i18n } = useTranslation();
  // format date api function
  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };
  // format date api function

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const dispatch = useDispatch();
  const getNews = useSelector((state) => state.news.getnews?.Data);

  useEffect(() => {
    dispatch(GetNews());
  }, []);
  return (
    <>
      <WrapperPress>
        <h2>{t("Home.7")}</h2>
        {getNews.map((elem) => (
          <div className="press-content">
            <p>
              {LangVal() == "ru"
                ? elem.description_ru
                : LangVal() == "uz"
                  ? elem.description_uz
                  : LangVal() == "en"
                    ? elem.description_en
                    : elem.description_ru}
            </p>
            <time>{DateFormat(elem.date)}</time>
            <hr />
          </div>
        ))}
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
          {t("Home.6")}
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default News;
