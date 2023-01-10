import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";

const Modul = ({ isSelect }) => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <WrapperPress>
        <h2>Модуль</h2>
        <p>Информация только для авторизованных пользователей</p>
        <p className="red-text">
          Информация будет доступна только после регистрации
        </p>

        <CommonButton
          style={{
            color: "#1E1E1E",
            borderColor: "#1E1E1E",
            display: "inline-block",
            marginTop: "30px",
            padding: "8px 30px",
          }}
          type={"button"}
        >
          Регистрация
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default Modul;
