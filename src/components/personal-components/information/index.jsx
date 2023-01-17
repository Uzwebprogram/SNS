import React from "react";
import { WrapperPress } from "./styled-index";

const Information = () => {
  return (
    <>
      <WrapperPress>
        <div className="header-div">
          <h2>Информация</h2>
          <button className="edit-btn">
            выйти <i class="bx bx-log-out"></i>
          </button>
        </div>
        <div className="flex">
          <p>Имя Фамилия Отчество</p>
          <span>email@gmail.ru</span>
        </div>

        <div className="reting-box line">
          <h2>Рейтинги компании</h2>
          <hr />
          <h4>Компании имя</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            quibusdam voluptatum nemo eum provident similique, asperiores
            perspiciatis quas ullam enim? Veniam dolores totam rem delectus.
            Repellat animi deleniti consectetur ad.
          </p>
        </div>
        <hr />
        <div className="renking-box line">
          <h2>Ренкинги компании</h2>
          <hr />
          <p>Text</p>
        </div>
      </WrapperPress>
    </>
  );
};

export default Information;
