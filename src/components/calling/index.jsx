import React from "react";
import CommonButton from "../../common/button";
import { WrapperPress } from "./styled-index";

const Calling = () => {
  return (
    <>
      <WrapperPress>
        <div className="scales-div">
          <h2>Комерческая служба</h2>
          <div className="call-div">
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
          </div>
        </div>
        <div className="scales-div">
          <h2>Служба внутреннего контроля</h2>
          <div className="call-div">
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
          </div>
        </div>
        <div className="scales-div">
          <h2>Контакты для СМИ</h2>
          <div className="call-div">
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
            <a href="tel: +7 (495) 231-70-84">+7 (495) 231-70-84</a>
          </div>
        </div>
        <div className="scales-div">
          <h2>
            Ежедневная E-mail <br /> рассылка
          </h2>
          <input type="email" placeholder="email" />
        </div>
        <CommonButton
          style={{
            color: "#FFFFFF",
            display: "inline-block",
            marginTop: "12px",
            padding: "8px 50px",
            background: "#2F66B8",
          }}
          type={"button"}
        >
          Подробнее
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default Calling;
