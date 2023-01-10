import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Wrapper , Overlay } from './styled-index';

const { Search } = Input;
const onSearch = (value) => console.log(value);
function SearchInput({SearchModal , SearchClose}) {
    const {t , i18n} = useTranslation();
  return (
        <>
            <Wrapper SearchModal={SearchModal}>
            <input
                    placeholder={t("Header.1")}
                    onSearch={onSearch}
                    type="search"
                    style={{
                        marginTop:"5px",
                        marginLeft:"12px",
                    }}
                    className="search"
            />
    </Wrapper>
                    <Overlay open={SearchModal} onClick={SearchClose}>
                    </Overlay>
        </>
  )
}

export default SearchInput