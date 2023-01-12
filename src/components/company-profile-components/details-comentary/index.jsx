import React from "react";
import { WrapperPress } from "./styled-index";

const DetailsComentary = () => {
  return (
    <>
      <WrapperPress>
        <h2>Упоминания о компании</h2>

        <div className="press-content">
          <p>«Эксперт РА» сообщает об обновлении методологии присвоения рейтингов кредитоспособности проектным компаниям</p>
          <time>16/12/2021</time>
          <hr />
        </div>
        <div className="press-content">
          <p>«Эксперт РА» сообщает об обновлении методологии присвоения рейтингов кредитоспособности проектным компаниям</p>
          <time>16/12/2021</time>
          <hr />
        </div>
      </WrapperPress>
    </>
  );
};

export default DetailsComentary;
