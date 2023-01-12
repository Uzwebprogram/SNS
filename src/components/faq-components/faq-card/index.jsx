import { WrapperPress } from "./styled-index";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const FaqCard = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <WrapperPress>
        <h2>Вопросы экспертам</h2>

        <div className="select-box">
          <select>
            <option value="Все вопросы">Все вопросы</option>
            <option value="Все вопросы">Все вопросы</option>
            <option value="Все вопросы">Все вопросы</option>
            <option value="Все вопросы">Все вопросы</option>
          </select>
        </div>

        <Accordion open={open} toggle={toggle}>
          {arr.map((elem, index) => (
            <AccordionItem>
              <AccordionHeader targetId={index}>
                Рэнкинг ЛК по объему нового бизнеса с МСБ в разрезе оборудования
              </AccordionHeader>
              <AccordionBody accordionId={index}>
                <p className="accor-p">
                  «Эксперт РА» сообщает об обновлении методологии присвоения
                  рейтингов кредитоспособности проектным компаниям, «Эксперт РА»
                  сообщает об обновлении методологии присвоения рейтингов
                  кредитоспособности проектным компаниям «Эксперт РА» сообщает
                  об обновлении методологии присвоения рейтингов
                  кредитоспособности проектным компаниям
                </p>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </WrapperPress>
    </>
  );
};

export default FaqCard;
