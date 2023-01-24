import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { Wrapper, Overlay } from "./styled-index";
const { Search } = Input;
function SearchInput({ SearchModal, SearchClose }) {
  const { t, i18n } = useTranslation();

  const onSearch = (value) => console.log(value);
    
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
      </Wrapper>
    </>
  );
}

export default SearchInput;
