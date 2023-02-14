import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { Wrapper, Overlay } from "./styled-index";
import { GetBanksSearch } from "../../../redux/bank/index";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const { Search } = Input;

function SearchInput({ SearchModal, SearchClose }) {
  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = (value) => {
    setSearch(value.target.value);
    dispatch(GetBanksSearch(value.target.value));
  };
  const getBankSearch = useSelector(
    (state) => state.banks.getbanksSearch?.Data
  );

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
        </div>
      </div>
      </Wrapper>
      
    </>
  );
}

export default SearchInput;
