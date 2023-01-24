import React, { useEffect } from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { GetInformation } from "../../../redux/information";
import { useDispatch, useSelector } from "react-redux";

const DisclosureCard = () => {
  const { t, i18n } = useTranslation();

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const dispatch = useDispatch();
  const getInformation = useSelector(
    (state) => state.information.getinformation?.Data
  );

  useEffect(() => {
    dispatch(GetInformation());
  }, []);
  return (
    <>
      <WrapperPress>
        <h2>{t("Disclosure.0")}</h2>

        {getInformation.map((elem) => (
          <div>
            <Row className="row">
              <Col lg={8} md={8} sm={6} sx={6} className="col">
                <a href={elem.pdf} target="_blank">
                  {LangVal() == "ru"
                    ? elem.title_ru
                    : LangVal() == "uz"
                    ? elem.title_uz
                    : LangVal() == "en"
                    ? elem.title_en
                    : elem.title_ru}
                  .pdf
                </a>
              </Col>
              <Col lg={4} md={4} sm={6} sx={6} className="col">
              <a href={elem.pdf} target="_blank">
                <span>{elem.size}</span>
              </a>
              </Col>
            </Row>
            <hr />
          </div>
        ))}
      </WrapperPress>
    </>
  );
};

export default DisclosureCard;
