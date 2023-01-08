import { WrapperContainer } from "../../../style-App"
import { Section, Wrapper } from "./styled-index"
import Logo from "./../../../assets/Header/logo.png"
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const { Search } = Input;
function HeaderBottom() {
    const onSearch = (value) => console.log(value);
    const {t , i18n} = useTranslation();
    const dataLink = [
        {
            id: 1,
            title : "Header.2",
            link : "/"
        },
        {
            id: 2,
            title : "Header.3",
            link : "/"
        },
        {
            id: 3,
            title : "Header.4",
            link : "/"
        },
        {
            id: 4,
            title : "Header.5",
            link : "/"
        },        
        {
            id: 5,
            title : "Header.6",
            link : "/"
        },
        {
            id: 6,
            title : "Header.7",
            link : "/"
        },
    ]
    return(
        <Section>
                <WrapperContainer>
                <Wrapper>
                <img src={Logo} alt="" />
            <Search
                    placeholder={t("Header.1")}
                    onSearch={onSearch}
                    style={{
                        width: 300,
                    }}
            />
            <ul>
                {dataLink.map((elem , index) =>
                                <li key={index}>
                                <NavLink style={{textDecoration:"none"}} to="/">
                                    <p>{t(elem.title)}</p>
                                </NavLink>
                            </li>
                )}
            </ul>
                </Wrapper>
        </WrapperContainer>
        </Section>
    )
}
export default HeaderBottom