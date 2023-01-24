import { useState } from "react";
import { WrapperContainer } from "../../../style-App";
import { Section, Wrapper, MobileDiv } from "./styled-index";
import Logo from "./../../../assets/Header/logo.svg";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from "./../../../assets/Header/hamburger.svg";
import SearchIcon from "./../../../assets/Header/search.svg";
import CloseIcon from "./../../../assets/Header/close-icon.svg";
import { dataLink } from "../../../utils/data-link";
import { GetBanksSearch } from "../../../redux/bank/index";
import { useDispatch, useSelector } from "react-redux";
const { Search } = Input;
function HeaderBottom({
  HandleOpen,
  close,
  SearchOpen,
  closSearch,
  closeSearchSet,
}) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log(search);
  const navigate = useNavigate();

  const onSearch = (value) => {
    setSearch(value.target.value);
    dispatch(GetBanksSearch(value.target.value));
  };
  const getBankSearch = useSelector(
    (state) => state.banks.getbanksSearch?.Data
  );
  return (
    <Section>
      <WrapperContainer>
        <Wrapper>
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
          <Search
            placeholder={t("Header.1")}
            onInput={onSearch}
            style={{
              width: 300,
            }}
            className="search"
          />
          <ul>
            {dataLink.map((elem, index) => (
              <li key={index}>
                <NavLink style={{ textDecoration: "none" }} to={elem.link}>
                  <p>{t(elem.title)}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <MobileDiv>
            {!closSearch ? (
              <img
                src={SearchIcon}
                width={18}
                onClick={SearchOpen}
                height={18}
                alt=""
              />
            ) : (
              <img
                src={CloseIcon}
                width={18}
                onClick={closeSearchSet}
                height={18}
                alt=""
              />
            )}

            <img
              src={Hamburger}
              onClick={HandleOpen}
              width={18}
              height={18}
              alt=""
            />
          </MobileDiv>
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
      </WrapperContainer>
    </Section>
  );
}
export default HeaderBottom;
