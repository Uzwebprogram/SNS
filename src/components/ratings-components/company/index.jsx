import React, { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import Table from "./table";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { GetCategorie } from "../../../redux/categorie";
import { GetBanksId, GetBanksSearch } from "../../../redux/bank";

const Company = () => {
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
      <WrapperPress>
        <h2>{t("Rating.0")}</h2>
        <form>
          <Row className="row">
            <Col lg={8} className="col">
              <select onChange={Handlechange}>
                <option value="">{t("Select.1")}</option>
                {getCategorie.map((elem, index) => (
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
                  placeholder="Название компании"
                />
                <i class="bx bx-search"></i>
              </div>
            </Col>
            <Col lg={4} className="col col-media">
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
              <CommonButton
                style={{
                  color: "#1E1E1E",
                  borderColor: "#1E1E1E",
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "8px 50px",
                }}
                type={"button"}
              >
                {t("Rating.3")}
              </CommonButton>
            </Col>
          </Row>
        </form>
        <Row className="row">
          <Col lg={12} md={12} sm={12} className="col">
            <Table sorts={sorts} search={search} />
          </Col>
        </Row>
      </WrapperPress>
    </>
  );
};

export default Company;
