import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-grid-system";
import { Section, WrapperPress } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import Surway from "../../components/analytics-components/surway/index";
import Modul from "../../components/analytics-components/modul/index";
import Calling from "../../components/calling";
import { GetAnalytic } from "../../redux/analytic/index";
import { useDispatch, useSelector } from "react-redux";

const AnalyticMore = () => {
  const { id } = useParams();
  console.log();
  const idAnalitka = id.split(":");
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
  const getAnalytic = useSelector((state) => state.analytic.getanalytic?.Data);
  useEffect(() => {
    dispatch(GetAnalytic());
  }, []);
  console.log();
  const analyticMore = getAnalytic.find((elem) => elem.id == idAnalitka[1]);
  console.log(analyticMore);

  return (
    <>
      <Section>
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <WrapperPress>
                <h2>
                  {LangVal() == "ru"
                    ? analyticMore.title_ru
                    : LangVal() == "uz"
                    ? analyticMore.title_uz
                    : LangVal() == "en"
                    ? analyticMore.title_en
                    : analyticMore.title_ru}
                </h2>
                <p>
                  {LangVal() == "ru"
                    ? analyticMore.description_ru
                    : LangVal() == "uz"
                    ? analyticMore.description_uz
                    : LangVal() == "en"
                    ? analyticMore.description_en
                    : analyticMore.description_ru}
                </p>
                <img className="analytic-img" src={analyticMore.img} alt="image" />
              </WrapperPress>
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <Surway isMargin/>
              <Modul />
              <Calling />
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default AnalyticMore;
