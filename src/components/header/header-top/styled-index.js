import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    padding: 11px 0px;
    @media only screen and (max-width:920px) {
        width: 100%;
        .logo-insta{
            display: none;
        }
        .logo-tg{
            display: none;
        }
    }
    a {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.01em;
        color: #616262;
        text-decoration: none;
    }
    @media only screen and (max-width:920px) {
        width: 100%;
    }
    a i {
        color: #616262;
        font-size: 20px;
        @media only screen and (max-width:560px) {
        font-size: 15px !important;
        }
    }
    button{
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        p{
            margin: 0;
            padding: 0;
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.01em;
            color: #1E1E1E;
            @media only screen and (max-width:560px) {
            font-size: 12px;
        }
        }
        i {
            font-size: 24px;
            margin-right: 5px;
            @media only screen and (max-width:560px) {
            font-size: 18px;
        }
        }
    }
`