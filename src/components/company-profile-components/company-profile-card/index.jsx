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

  return (
    <>
      <WrapperPress
        style={isSelect == true ? { marginTop: 0 } : { marginTop: 20 }}
      >
        {banksId.map((elem) => (
          <>
            <h2>{elem.companyname}</h2>
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
              <Row className="row">
                <Col lg={6} md={8} sm={6} sx={6} className="col">
                  <p>{t("Requisites.0")}</p>
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
                  <p>{t("Requisites.1")}</p>
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


              <div className="table-scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t("Rating.5")}</th>
                      <th>{t("Rating.19")}</th>
                      <th>{t("Requisites.8")}</th>
                      <th>{t("Requisites.9")}</th>
                      <th>{t("Requisites.10")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elem.raiting.map((elem) => (
                      <tr>
                        <td className="td">{elem.raiting}</td>
                        <td className="td">{elem.type_reting}</td>
                        <td className="td">{elem.prognoz}</td>
                        <td className="td">{elem.update_date}</td>
                        <td className="td td-btn">
                          <CommonButton
                            style={{
                              borderColor: "#2F66B8",
                              background: "#2F66B8",
                              display: "inline-block",
                              padding: "0 10px",
                            }}
                            type={"button"}
                          >
                            <a
                              className="a"
                              target="_blank"
                              href={elem.sertifikat}
                              download
                              rel="noreferrer"
                            >
                              {t("Requisites.11")}
                            </a>
                          </CommonButton>
                        </td>
                      </tr>
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
