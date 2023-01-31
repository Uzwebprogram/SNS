import React, { useEffect, useState } from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { GetRanking } from "../../../redux/ranking/index";
import { GetRankingId } from "../../../redux/ranking/index";
import { useDispatch, useSelector } from "react-redux";
import Tables from "./table";

const Ranking = ({ isSelect, isBtn }) => {
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
  const getRanking = useSelector((state) => state.ranking.getranking?.Data);
  console.log(getRanking);

  const [sorts, setSorts] = useState("");

  let arr = [];

  const Handlechange = (e) => {
    setSorts(e.target.value);
    // dispatch(GetRankingId());
  };

  useEffect(() => {
    dispatch(GetRanking());
  }, []);
  getRanking.map((elem) => {
    if (!arr.includes(elem.category_name)) {
      arr.push(elem.category_name);
    }
  });

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
              {arr.map((elem, index) => (
                <option key={index} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <Tables sorts={sorts} />

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
