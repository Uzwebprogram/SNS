import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";

const RankingCard = ({ isSelect }) => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <WrapperPress>
        <h2>Что такое Рэнкинг?</h2>
        <p>
          Рэнкинг лизинговых компаний России по итогам 9 месяцев 2022 года
          «Эксперт РА» сообщает об обновлении методологии присвоения рейтингов
          кредитоспособности проектным компаниям«Эксперт РА» сообщает об
          обновлении методологии присвоения рейтингов кредитоспособности
          проектным компаниям«Эксперт РА» сообщает об обновлении методологии
          присвоения рейтингов кредитоспособности проектным компаниям«Эксперт
          РА» сообщает об обновлении методологии присвоения рейтингов
          кредитоспособности проектным компаниямРэнкинг лизинговых компаний
          России по итогам 9 месяцев 2022 года Рэнкинг лизинговых компаний
          России по итогам 9 месяцев 2022 года Рэнкинг лизинговых компаний
          России по итогам 9 месяцев 2022 года Рэнкинг лизинговых компаний
          России по итогам 9 месяцев 2022 года Рэнкинг «Эксперт РА» сообщает об
          обновлении методологии присвоения рейтингов кредитоспособности
          проектным компаниям
        </p>
      </WrapperPress>
    </>
  );
};

export default RankingCard;
