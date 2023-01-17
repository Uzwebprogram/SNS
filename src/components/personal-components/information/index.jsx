import React from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import { WrapperPress } from "./styled-index";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const cookies = new Cookies();
  const personalData = cookies.get("AuthDataUser");
  console.log(personalData);

  const navigate = useNavigate();

  const HandleRemove = async () => {
    cookies.remove("AuthTokenUser");
    cookies.remove("AuthDataUser");
    await navigate("/");
    window.location.reload();
  };
  return (
    <>
      <WrapperPress>
        <div className="header-div">
          <h2>Информация</h2>
          <button className="edit-btn" onClick={HandleRemove}>
            выйти <i class="bx bx-log-out"></i>
          </button>
        </div>
        <div className="wrapper-box">
          <div className="flex">
            <p>{personalData.email}</p>
          </div>

          <div className="reting-box line">
            <h2>Рейтинги компании</h2>
            <hr />
            <h4>{personalData.companyname}</h4>
            <p>
              Скором времени здесь будут ваши результаты! Спасибо что
              пользуйтесь нашими услугами!
            </p>
          </div>
          <hr />
          <div className="renking-box line">
            <h2>Ренкинги компании</h2>
            <hr />
            <p>
              Скором времени здесь будут ваши результаты! Спасибо что
              пользуйтесь нашими услугами!
            </p>
          </div>
        </div>
      </WrapperPress>
    </>
  );
};

export default Information;
