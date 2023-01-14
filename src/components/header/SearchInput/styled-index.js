import styled from "styled-components";


export const Wrapper = styled.div`
    display: none;
    @media only screen and (max-width:920px) {
        display: ${(props) => (props.SearchModal ? "block" : "none")} ;
    }
   .search{
    background: #FFFFFF;
border-radius: 7px;
    padding: 10px;
    width: 85%;
   } 
`
export const Overlay = styled.div`
    display: ${(props) => (props.open ? "block" : "none")};
    background-color: rgba(0,0,0,0);
    width: 100%;
    height: 100vh;
`