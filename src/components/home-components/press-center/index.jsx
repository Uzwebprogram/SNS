import React, { useEffect } from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { useTranslation } from "react-i18next";
import { GetPressCenter } from "../../../redux/press-center";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { NavLink } from "react-router-dom";

const PressCenter = ({ styles }) => {
  const arr = [1, 2, 3, 4];
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
  const getPress = useSelector((state) => state.pressCenter.getpresscenter?.Data)
  // console.log(getPress)

  useEffect(() => {
    dispatch(GetPressCenter());
  }, []);

  return (
    <div style={styles}>
      <WrapperPress>
        <h2>{t("Home.4")}</h2>
        {getPress.map((elem) => (
          <>
            <a target={"_blank"} href={elem.press_center_pdf} className="press-content">
            <h5>
                {LangVal() == "ru"
                  ? elem.title_ru
                  : LangVal() == "uz"
                    ? elem.title_uz
                    : LangVal() == "en"
                      ? elem.title_en
                      : null}
              </h5>
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
            </a>
          </>
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
          <NavLink className='news_links' to='/news'>
            {t("Home.6")}
          </NavLink>
        </CommonButton>
      </WrapperPress>
    </div>
  );
};

export default PressCenter;
