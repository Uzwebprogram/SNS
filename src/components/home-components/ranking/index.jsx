import React, { useEffect, useState } from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import {
  GetRanking,
  GetRankingFilterAtribut,
  GetRankingFilterKvartal,
  GetRankingFilterYear,
} from "../../../redux/ranking/index";
import { GetRankingId } from "../../../redux/ranking/index";
import { useDispatch, useSelector } from "react-redux";
import Tables from "./table";
import { useSelect } from "@mui/base";
import { useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Ranking = ({ isSelect, isBtn }) => {
  const { t, i18n } = useTranslation();
  const [data3, setData3] = useState();
  const [atribut, setAtribut] = useState(false);
  const [yearBoolean, setYearBoolean] = useState(false);
  const [AtributBoolean, setAtributBoolean] = useState(false);

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
  const getRanking = useSelector((state) => state.ranking.getranking?.Data);
  const getRankingFilterYear = useSelector(
    (state) => state.ranking.getRankingFilterYear
  );
  console.log(getRankingFilterYear);
  const navigate = useNavigate();
  let { CategoryName, atributs, Year1, Year2 } = useParams();
  let arr = [];
  const Handlechange = async (e) => {
    await navigate(`/ranking/${e.target.value}`);
    yearBoolean(false);
  };
  const HandlechangeAtribut = async (e) => {
    dispatch(GetRankingFilterAtribut(e.target.value));
    navigate(`/ranking/${CategoryName}/${e.target.value}`);
    setAtribut(true);
    yearBoolean(false);
  };
  const dataAtribut = useSelector(
    (state) => state.ranking.getRankingFilterAtribut?.Data
  );
  useEffect(() => {
    dispatch(GetRanking());
  }, []);
  getRanking.map((elem) => {
    if (!arr.includes(elem.category_name)) {
      arr.push(elem.category_name);
    }
  });
  const arr2 = [];
  getRanking.map((elem) => {
    elem.about_renking.map((item) => {
      if (!arr2.includes(item.atribut)) {
        arr2.push(item.atribut);
      }
    });
  });
  const arr3 = [];
  dataAtribut.map((elem) => {
    if (elem.category_name == CategoryName) {
      arr3.push(elem);
    } else if (CategoryName == undefined) {
      arr3.push(elem);
    }
  });

  const yearRef1 = useRef();
  const yearRef2 = useRef();
  const KvartalRef1 = useRef();
  const KvartalRef2 = useRef();
  const dataFilterYear = useSelector(
    (state) => state.ranking.getRankingFilterYear?.Data
  );
  const dataFilterKvartal = useSelector(
    (state) => state.ranking.getRankingFilterKvartal?.Data
  );
  console.log(dataFilterKvartal);
  let arr4 = [];
  dataFilterYear.map((elem) => {
    if (elem.category_name == CategoryName) {
      arr4.push(elem);
    } else if (CategoryName == undefined) {
      arr4.push(elem);
    }
  });
  let arr5 = [];
  console.log(arr5);
  dataFilterKvartal.map((elem) => {
    if (elem.category_name == CategoryName) {
      arr5.push(elem);
    } else if (CategoryName == undefined) {
      arr5.push(elem);
    }
  });

  const HandleFilter = (e) => {
    e.preventDefault();
    const year1 = yearRef1.current.value;
    const year2 = yearRef2.current.value;
    dispatch(GetRankingFilterYear({ year1, year2 }));
    navigate(`/ranking/${CategoryName}/${atributs}/${year1}/${year2}`);
    setYearBoolean(true);
  };
  const HandleFilterKvartal = (e) => {
    e.preventDefault();
    const kvartal1 = KvartalRef1.current.value;
    const kvartal2 = KvartalRef2.current.value;
    dispatch(GetRankingFilterKvartal({ kvartal1, kvartal2 }));
    // navigate(`/ranking/${CategoryName}/${atributs}/${year1}/${year2}`)
    // setYearBoolean(true)
    setAtributBoolean(true);
  };
  console.log(CategoryName);

  return (
    <>
      <WrapperPress
        id="rankin"
        style={isSelect == true ? { marginTop: 0 } : { marginTop: 20 }}
      >
        <h2>{t("Home.2")}</h2>
        {isSelect == true ? (
          <div className="select-box">
            <select onChange={Handlechange}>
              <option value="">{t("Select.1")}</option>
              <option disabled value="ФИНАНСОВЫЙ СЕКТОР">
                ФИНАНСОВЫЙ СЕКТОР
              </option>
              {arr.slice(0, 7).map((elem, index) => (
                <option key={index} value={elem}>
                  {elem}
                </option>
              ))}
              <option disabled value="КОРПОРАТИВНЫЙ СЕКТОР">
                КОРПОРАТИВНЫЙ СЕКТОР
              </option>
              {arr.slice(7, 8).map((elem, index) => (
                <option key={index} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        {CategoryName == "undefined" ? (
          <p style={{ color: "red", fontSize: "12px" }}>{t("Ranking.7")}</p>
        ) : null}
        {isSelect == true ? (
          <div className="select-box">
            <select onChange={HandlechangeAtribut}>
              <option value="">Barcha atributlar</option>
              {arr2.map((elem, index) => (
                <option key={index} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        {atributs == "undefined" ? (
          <p style={{ color: "red", fontSize: "12px" }}>{t("Ranking.8")}</p>
        ) : null}
        <form className="year-form" onSubmit={HandleFilter}>
          <h4>{t("Rating.17")}</h4>
          <div className="year-wrapper">
            <div className="year-box">
              <div>
                <p>{t("Ranking.9")}</p>
                <select className="year-select" ref={yearRef1}>
                  <option value="">{t("Ranking.11")}</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div>
                <p>{t("Ranking.10")}</p>
                <select className="year-select" ref={yearRef2}>
                  <option value="">{t("Ranking.11")}</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>
            <button type="submit">filter</button>
          </div>
        </form>
        <form className="year-form" onSubmit={HandleFilterKvartal}>
          <h4>{t("Rating.18")}</h4>
          <div className="year-wrapper">
            <div className="year-box">
              <div>
                <p>{t("Ranking.9")}</p>
                <select className="year-select" ref={KvartalRef1}>
                  <option value="">{t("Rating.13")}</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </select>
              </div>
              <div>
                <p>{t("Ranking.10")}</p>
                <select className="year-select" ref={KvartalRef2}>
                  <option value="">{t("Rating.13")}</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </select>
              </div>
            </div>
            <button type="submit">filter</button>
          </div>
        </form>
        <Tables
          sorts={CategoryName}
          atribut={atribut}
          atributs={atributs}
          getranking={getRanking}
          arr3={arr3}
          arr4={arr4}
          yearBoolean={yearBoolean}
          Year1={Year1}
          Year2={Year2}
          arr5={arr5}
          AtributBoolean={AtributBoolean}
        />

        {isBtn == true ? null : (
          <CommonButton
            style={{
              color: "#000",
              borderColor: "#000",
              display: "inline-block",
              marginTop: "30px",
              padding: "8px 30px",
            }}
            type={"button"}
          >
            <a className="a" href="/ranking">
              {t("Home.3")}
            </a>
          </CommonButton>
        )}
      </WrapperPress>
    </>
  );
};

export default Ranking;
