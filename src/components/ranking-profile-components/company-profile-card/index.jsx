import React, { useEffect } from "react";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { GetRanking, GetRankingId } from "../../../redux/ranking/index";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "../../../common/button";

const CompanyProfileCard = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  // const getranking = useSelector((state) => state.ranking.getbanks?.Data);

  window.localStorage.setItem("MoreId", id);

  useEffect(() => {
    dispatch(GetRanking());
  }, []);
  const rankingId = useSelector((state) => state.ranking.getrankingId?.Data);
  useEffect(() => {
    dispatch(GetRankingId(window.localStorage.getItem("MoreId")));
  }, []);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  console.log(rankingId);
  return (
    <>
      <WrapperPress
        style={isSelect == true ? { marginTop: 0 } : { marginTop: 20 }}
      >
        {rankingId.map((elem) => (
          <>
            <h2>
              {LangVal() == "ru"
                ? elem.title_ru
                : LangVal() == "uz"
                ? elem.title_uz
                : LangVal() == "en"
                ? elem.title_en
                : elem.title_ru}
            </h2>
            <div>
              <div className="df">
                <h3>{t("Requisites.4")}</h3>
                <CommonButton
                  style={{
                    color: "#fff",
                    borderColor: "#2F66B8",
                    background: "#2F66B8",
                    display: "inline-block",
                    marginTop: "12px",
                    padding: "8px 50px",
                  }}
                  type={"button"}
                >
                  {t("Rating.3")}
                </CommonButton>
              </div>
              <hr className="hr" />
              <Row className="row">
                <Col lg={6} md={8} sm={6} sx={6} className="col">
                  <p>{t("Requisites.0")}</p>
                </Col>
                <Col lg={6} md={4} sm={6} sx={6} className="col">
                  <span>{elem.inn}</span>
                </Col>
              </Row>
              <hr />
            </div>
            <div>
              <Row className="row">
                <Col lg={6} md={8} sm={6} sx={6} className="col">
                  <p>{t("Requisites.1")}</p>
                </Col>
                <Col lg={6} md={4} sm={6} sx={6} className="col">
                  <span>{elem.ogrn}</span>
                </Col>
              </Row>
              <hr />
            </div>
            <div>
              <Row className="row">
                <Col lg={6} md={8} sm={6} sx={6} className="col">
                  <p>{t("Requisites.2")}</p>
                </Col>
                <Col lg={6} md={4} sm={6} sx={6} className="col">
                  <span>{elem.kpp}</span>
                </Col>
              </Row>
              <hr />
            </div>
            <div>
              <Row className="row">
                <Col lg={6} md={8} sm={6} sx={6} className="col">
                  <p>{t("Requisites.3")}</p>
                </Col>
                <Col lg={6} md={4} sm={6} sx={6} className="col">
                  <span>{elem.country}</span>
                </Col>
              </Row>
              <hr />
            </div>
            <div className="table-box">
              <h3>{t("Requisites.5")}</h3>
              <hr className="hr" />

              <p>{t("Requisites.6")}</p>

              <div className="table-scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t("Requisites.7")}</th>
                      <th>{t("Rating.13")}</th>
                      <th>{t("Rating.14")}</th>
                      <th>{t("Rating.15")}</th>
                      <th>{t("Rating.16")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elem.about_renking.map((e) => (
                      <>
                        <tr>
                          <td className="td">{e.raiting}</td>
                          <td className="td">{e.kvartal}</td>
                          <td className="td">{e.atribut}</td>
                          <td className="td">{e.god}</td>
                          <td className="td">{e.sum}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ))}
      </WrapperPress>
    </>
  );
};

export default CompanyProfileCard;
