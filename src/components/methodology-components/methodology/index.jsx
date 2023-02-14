import React, { useEffect, useState } from "react";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { GetMethodology } from "../../../redux/methodology/index";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Methodology = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const dispatch = useDispatch();
  const getMethodology = useSelector(
    (state) => state.methodology.getmethodology?.Data
  );

  const [sorts, setSorts] = useState("");

  let arr = [];
  let findData = null;

  const Handlechange = (e) => {
    setSorts(e.target.value);
  };

  getMethodology.map((elem) => {
    if (!arr.includes(elem.category_name)) {
      arr.push(elem.category_name);
    }
  });

  useEffect(() => {
    dispatch(GetMethodology());
  }, []);
  return (
    <>
      <WrapperPress>
        <h2>{t("Methodology.0")}</h2>

        <div className="select-box">
          <select onChange={Handlechange}>
            <option value="">{t("Select.2")}</option>
            {arr.map((elem, index) => (
              <option key={index} value={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>

        {getMethodology.map((elem) =>
          sorts == elem.category_name || sorts == "" ? (
            <div>
              <Row className="row">
                <Col lg={8} md={8} sm={6} sx={6} className="col">
                  <a href={elem.pdf} download="МИНИ ПАКЕТ">
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
                  <span>{elem.size}</span>
                </Col>
              </Row>
              <hr />
            </div>
          ) : null
        )}
      </WrapperPress>
    </>
  );
};

export default Methodology;
