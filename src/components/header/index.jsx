import { useState } from "react"
import HeaderBottom from "./header-bottom"
import HeaderMobile from "./header-mobile"
import HeaderTop from "./header-top"
import SearchInput from "./SearchInput"
import { Overlay } from "./SearchInput/styled-index"
import {Wrapper} from "./styled-index"
import Cookies from "universal-cookie/cjs/Cookies"
function Header() {
    const [HeaderHamburger , setHamburger] = useState(false) 
    const [SearchModal , setSearchModal] = useState(false)
        const cookies = new Cookies();
        console.log(cookies.get("AuthDataUser"));
    return(
        <>
                <Wrapper>
        <HeaderTop/>
        <HeaderBottom closSearch={SearchModal} closeSearchSet={() => setSearchModal(false)} SearchOpen={() => setSearchModal(true)} HandleOpen={() => setHamburger(true)} HandleClose={() => setHamburger(true)}/>
        <HeaderMobile open={HeaderHamburger} HandleClose={() => setHamburger(false)}/>
        <SearchInput SearchModal={SearchModal} SearchClose={() => setSearchModal(false)}/>
        </Wrapper>

        </>

    )
}
export default Header