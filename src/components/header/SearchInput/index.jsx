import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { Wrapper, Overlay } from "./styled-index";
import { GetBanksSearch } from "../../../redux/bank/index";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAnalyticSearch } from "../../../redux/analytic";
import Cookies from "universal-cookie";
const { Search } = Input;

function SearchInput({ SearchModal, SearchClose }) {
  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const onSearch = async(e) => {
    setSearch(e.target.value);
    dispatch(GetBanksSearch(e.target.value));
   dispatch(GetAnalyticSearch(e.target.value))
  };
  const getBankSearch = useSelector(
    (state) => state.banks.getbanksSearch?.Data
  );
  const GetAnalyticaSearch = useSelector(
    (state) => state.analytic.getanalyticSearch.Data
  );
  function GetLanguageValue() {
    return cookies.get("i18next")
  }
  return (
    <>
      <Wrapper SearchModal={SearchModal}>
        <input
          placeholder={t("Header.1")}
          onInput={onSearch}
          type="search"
          style={{
            marginTop: "5px",
            marginLeft: "12px",
          }}
          className="search"
        />
        <Overlay open={SearchModal} onClick={SearchClose}></Overlay>
        <div
        onClick={() => setSearch("")}
        className={!search == "" ? "modals" : "nomodals"}
      >
        <div className="modal-contents">
        <p className="padding-header">{t("Header.9")}</p>
        <hr /> 
          {!search == ""
            ? getBankSearch.map((elem) => (
                <>
                  <button
                    id={elem.bank_id}
                    onClick={async (e) => {
                      await navigate(`/companyprofile/${e.target.id}`);
                      window.location.reload();
                    }}
                    className="navlink"
                  >
                    {elem.companyname}
                  </button>
                  <br />
                </>
              ))
            : null}
            <p className="padding-header">{t("Header.4")}</p>
            <hr /> 
            {!search == "" ? GetAnalyticaSearch.map(elem =>               
             <>
                  <a href={elem.analitka_pdf}
                  target={"_blank"}
                  className="navlink-href"
                  >
                    
                    {GetLanguageValue() == 'uz' ? elem.title_uz : GetLanguageValue() == 'ru' ? elem.title_ru : GetLanguageValue() == 'en' ? elem.title_en : null}
                  </a>
                  <br  />
                </> ): null}
        </div>
      </div>
      </Wrapper>
      
    </>
  );
}

export default SearchInput;
