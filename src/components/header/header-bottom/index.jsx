import { useState } from "react";
import { useLocation } from "react-router-dom";
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
import { Link } from "react-scroll";
import Cookies from 'universal-cookie/cjs/Cookies';
import { HashLink } from "react-router-hash-link";
import ModalCommon from "../../common/Modal/Modal";
import Auth from "../auth";
import LanguageHeader from "../header-language";
import { GetAnalyticSearch } from "../../../redux/analytic";
const { Search } = Input;
function HeaderBottom({
  HandleOpen2,
  close,
  SearchOpen,
  closSearch,
  closeSearchSet,
}) {
  const [open , setOpen] = useState(false)
  const HandleOpen = () => setOpen(true)
  const HandleClose3 = () => setOpen(false)
  const pathname = useLocation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();
  function GetLanguageValue() {
    return cookies.get("i18next")
  }
  const onSearch = (e) => {
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
  return (
    <Section>
      <WrapperContainer>
        <Wrapper>
          <HashLink to={"/#home"} smooth>
            <img src={Logo} alt="" />
          </HashLink>
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
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={pathname == `${elem.link}` ? "active" : "links"}
                  to={elem.link}
                >
                  <p>{t(elem.title)}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="Auth">
              {!cookies.get("AuthTokenUser") ?  <i onClick={HandleOpen} class='bx bx-user-circle'></i> :  <NavLink to="/lichniykabinet"><i class='bx bx-user-circle'></i></NavLink>}
            </div>
          <MobileDiv>
          <div className="AuthMobile">
              {!cookies.get("AuthTokenUser") ?  <i onClick={HandleOpen} class='bx bx-user-circle'></i> :  <NavLink to="/lichniykabinet"><i class='bx bx-user-circle'></i></NavLink>}
            </div>
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
              onClick={HandleOpen2}
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
                    className="navlink-href"
                  >
                    
                    {GetLanguageValue() == 'uz' ? elem.title_uz : GetLanguageValue() == 'ru' ? elem.title_ru : GetLanguageValue() == 'en' ? elem.title_en : null}
                  </a>
                  <br  />
                </> ): null}
        </div>
          </div>

            {!cookies.get("AuthTokenUser") ? 
   <ModalCommon  height={518} handleClose={HandleClose3} open={open}>
    <Auth HandleClose3={HandleClose3}/>
    </ModalCommon> : null } 
    <LanguageHeader/>
        </Wrapper>
      </WrapperContainer>
    </Section>
  );
}
export default HeaderBottom;
