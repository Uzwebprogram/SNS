import React, { useEffect } from "react";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { GetBanks, GetBanksIds } from "../../../redux/bank";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "../../../common/button";

const CompanyProfileCard = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const getBanks = useSelector((state) => state.banks.getbanks?.Data);

  window.localStorage.setItem("MoreId", id);

  useEffect(() => {
    dispatch(GetBanks());
  }, []);
  const banksId = useSelector((state) => state.banks.getbanksIds?.Data);
  useEffect(() => {
    dispatch(GetBanksIds(window.localStorage.getItem("MoreId")));
  }, []);

  console.log(banksId);
  return (
    <>
      <WrapperPress
        style={isSelect == true ? { marginTop: 0 } : { marginTop: 20 }}
      >
        {banksId.map((elem) => (
          <>
            <h2>{elem.companyname}</h2>
            <div>
              <h3>{t("Requisites.4")}</h3>
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
            <div>
              <Row className="row">
                <Col lg={6} md={8} sm={6} sx={6} className="col">
                  <p>{t("Requisites.10")}</p>
                </Col>
                <Col lg={6} md={4} sm={6} sx={6} className="col">
                  <CommonButton
                    style={{
                      borderColor: "#2F66B8",
                      background: "#2F66B8",
                      display: "inline-block",
                      padding: "8px 30px",
                    }}
                    type={"button"}
                  >
                    <a
                      className="a"
                      target="_blank"
                      href={elem.image}
                      download
                      rel="noreferrer"
                    >
                      {t("Requisites.11")}
                    </a>
                  </CommonButton>
                </Col>
              </Row>
            </div>
            <div className="table-box">
              <h3>{t("Requisites.5")}</h3>
              <hr className="hr" />

              <p>{t("Requisites.6")}</p>

              <table className="table">
                <thead>
                  <tr>
                    <th>{t("Requisites.7")}</th>
                    <th>{t("Requisites.8")}</th>
                    <th>{t("Requisites.9")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{elem.raiting}</td>
                    <td>{elem.prognoz}</td>
                    <td>{elem.update_date}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ))}
      </WrapperPress>
    </>
  );
};

export default CompanyProfileCard;
