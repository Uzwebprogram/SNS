import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-grid-system";
import { Section, WrapperPress } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import PressCenter from "../../components/home-components/press-center/index";
import Calling from "../../components/calling";
import { GetAnalytic, GetAnalyticId } from "../../redux/analytic/index";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "../../common/button";
import { useTranslation } from "react-i18next";

const AnalyticMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  console.log();
  window.localStorage.setItem("AnalyticId", id);

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const dispatch = useDispatch();
  const getAnalytic = useSelector((state) => state.analytic.getanalytic?.Data);
  useEffect(() => {
    dispatch(GetAnalytic());
  }, []);

  useEffect(() => {
    dispatch(GetAnalyticId(window.localStorage.getItem("AnalyticId")));
  });
  const getAnalyticId = useSelector(
    (state) => state.analytic.getanalyticId?.Data
  );

  return (
    <>
      <Section>
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <WrapperPress>
                {getAnalyticId.map((elem) => (
                  <>
                    <div className="dfs">
                      <h2>
                        {LangVal() == "ru"
                          ? elem.title_ru
                          : LangVal() == "uz"
                          ? elem.title_uz
                          : LangVal() == "en"
                          ? elem.title_en
                          : elem.title_ru}
                      </h2>
                      <CommonButton
                        style={{
                          color: "#FFFFFF",
                          display: "inline-block",
                          padding: "8px 50px",
                          background: "#2F66B8",
                        }}
                        type={"button"}
                      >
                        {t("Calling.5")}
                      </CommonButton>
                    </div>
                    <p>
                      {LangVal() == "ru"
                        ? elem.description_ru
                        : LangVal() == "uz"
                        ? elem.description_uz
                        : LangVal() == "en"
                        ? elem.description_en
                        : elem.description_ru}
                    </p>
                    <img className="analytic-img" src={elem.img} alt="image" />
                  </>
                ))}
              </WrapperPress>
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <PressCenter />
              <Calling />
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default AnalyticMore;
