import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "react-grid-system";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import Table from "./table";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { GetCategorie } from "../../../redux/categorie";
import { GetBanksId, GetBanksSearch } from "../../../redux/bank";

const Company = ({ isSelect, isBtn, isMargin }) => {
  const [sorts, setSorts] = useState("");
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(GetCategorie());
  }, []);
  const Handlechange = (e) => {
    setSorts(e.target.value);
    dispatch(GetBanksId());
  };

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const dispatch = useDispatch();
  const getCategorie = useSelector(
    (state) => state.categorie.getcategorie?.Data
  );

  const HandleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(GetBanksSearch(e.target.value));
  };

  return (
    <>
      <WrapperPress isMargin={isMargin}>
        <h2>{t("Rating.0")}</h2>
        <form>
          <Row className="row">
            <Col lg={8} className="col">
              {isSelect == true ? null : (
                <>
                  <select onChange={Handlechange}>
                    <option value="">{t("Select.1")}</option>
                    <option disabled value="ФИНАНСОВЫЙ СЕКТОР">
                      {t("Ranking.14")}
                    </option>
                    {getCategorie.slice(0, 7).map((elem, index) => (
                      <option key={index} value={elem.category_id}>
                        {LangVal() == "ru"
                          ? elem.title_ru
                          : LangVal() == "uz"
                          ? elem.title_uz
                          : LangVal() == "en"
                          ? elem.title_en
                          : elem.title_ru}
                      </option>
                    ))}
                    <option disabled value="КОРПОРАТИВНЫЙ СЕКТОР">
                      {t("Ranking.15")}
                    </option>
                    {getCategorie.slice(7, 8).map((elem, index) => (
                      <option key={index} value={elem.category_id}>
                        {LangVal() == "ru"
                          ? elem.title_ru
                          : LangVal() == "uz"
                          ? elem.title_uz
                          : LangVal() == "en"
                          ? elem.title_en
                          : elem.title_ru}
                      </option>
                    ))}
                    <option disabled value="ФИНАНСОВЫЕ ИНСТРУМЕНТЫ">
                      {t("Selects.2")}
                    </option>
                    {getCategorie.slice(8, 10).map((elem, index) => (
                      <option key={index} value={elem.category_id}>
                        {LangVal() == "ru"
                          ? elem.title_ru
                          : LangVal() == "uz"
                          ? elem.title_uz
                          : LangVal() == "en"
                          ? elem.title_en
                          : elem.title_ru}
                      </option>
                    ))}
                  </select>
                  <div className="input-group">
                    <input
                      type="search"
                      onInput={HandleSearch}
                      placeholder={t("Auth.2")}
                    />
                    <i class="bx bx-search"></i>
                  </div>
                </>
              )}
            </Col>
            <Col lg={4} className="col col-media">
              {isSelect == true ? null : (
                <>
                  <div className="radio-box">
                    <input
                      type="radio"
                      id="radio1"
                      name="radio-name1"
                      value="Только отозванные"
                      disabled
                    />
                    <label for="radio1">{t("Rating.1")}</label>
                  </div>
                  <div className="radio-box">
                    <input
                      type="radio"
                      id="radio2"
                      name="radio-name2"
                      value="Только под наблюдением"
                      disabled
                    />
                    <label for="radio2">{t("Rating.2")}</label>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </form>
        <Row className="row">
          <Col lg={12} md={12} sm={12} className="col">
            <Table sorts={sorts} search={search} />
          </Col>
        </Row>
        {isBtn == true ? (
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
            <NavLink className="links" to="/ratings">
              {t("Home.3")}
            </NavLink>
          </CommonButton>
        ) : null}
      </WrapperPress>
    </>
  );
};

export default Company;
