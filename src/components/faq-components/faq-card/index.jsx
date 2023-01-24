import { WrapperPress } from "./styled-index";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { GetFaq } from "../../../redux/faq";
import { useDispatch, useSelector } from "react-redux";

const FaqCard = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  // API Get
  let arr = [];
  const Handlechange = (e) => {
    setSorts(e.target.value);
  };

  const [sorts, setSorts] = useState("");
  const dispatch = useDispatch();
  const getFaq = useSelector((state) => state.faq.getfaq?.Data);

  useEffect(() => {
    dispatch(GetFaq());
  }, []);

  getFaq.map((elem) => {
    if (!arr.includes(elem.category_name)) {
      arr.push(elem.category_name);
    }
  });
  // API Get

  return (
    <>
      <WrapperPress>
        <h2>{t("Faq.0")}</h2>

        <div className="select-box">
          <select onChange={Handlechange}>
            <option value="">{t("Select.0")}</option>
            {arr.map((elem, index) => (
              <option key={index} value={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>

        <Accordion open={open} toggle={toggle}>
          {getFaq.map((elem, index) =>
            sorts == elem.category_name || sorts == "" ? (
              <AccordionItem>
                <AccordionHeader targetId={index}>
                  {LangVal() == "ru"
                    ? elem.title_ru
                    : LangVal() == "uz"
                    ? elem.title_uz
                    : LangVal() == "en"
                    ? elem.title_en
                    : elem.title_ru}
                </AccordionHeader>
                <AccordionBody accordionId={index}>
                  <p className="accor-p">
                    {LangVal() == "ru"
                      ? elem.description_ru
                      : LangVal() == "uz"
                      ? elem.description_uz
                      : LangVal() == "en"
                      ? elem.description_en
                      : elem.description_ru}
                  </p>
                </AccordionBody>
              </AccordionItem>
            ) : null
          )}
        </Accordion>
      </WrapperPress>
    </>
  );
};

export default FaqCard;
