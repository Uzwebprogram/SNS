import { WrapperContainer } from "../../../style-App"
import { Section, Wrapper, MobileDiv } from "./styled-index"
import Logo from "./../../../assets/Header/logo.png"
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Hamburger from "./../../../assets/Header/hamburger.svg"
import SearchIcon from "./../../../assets/Header/search.svg"
import CloseIcon from "./../../../assets/Header/close-icon.svg"
import { dataLink } from "../../../utils/data-link";
const { Search } = Input;
function HeaderBottom({HandleOpen , close , SearchOpen , closSearch , closeSearchSet}) {
    const onSearch = (value) => console.log(value);
    const {t , i18n} = useTranslation();

    return(
        <Section>
                <WrapperContainer>
                <Wrapper>
                
                    <NavLink to={"/"}><img src={Logo} alt="" /></NavLink>
                <Search
                    placeholder={t("Header.1")}
                    onSearch={onSearch}
                    style={{
                        width: 300,
                    }}
                    className="search"
            />
            <ul>
                {dataLink.map((elem , index) =>
                                <li key={index}>
                                <NavLink style={{textDecoration:"none"}} to={elem.link}>
                                    <p>{t(elem.title)}</p>
                                </NavLink>
                            </li>
                )}
            </ul>
            <MobileDiv>
                {!closSearch ? <img src={SearchIcon} width={18} onClick={SearchOpen} height={18} alt="" />:<img src={CloseIcon} width={18} onClick={closeSearchSet} height={18} alt="" />}
                
                
                    <img src={Hamburger} onClick={HandleOpen} width={18} height={18}  alt="" />
                </MobileDiv>
                </Wrapper>
        </WrapperContainer>
        </Section>
    )
}
export default HeaderBottom