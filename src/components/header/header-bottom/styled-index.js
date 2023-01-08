import styled from "styled-components"

export const Section = styled.div`
    padding:  10px 0;
    background-color: #2F66B8;
    .ant-input{
        :hover{
            border: 1px solid white;
            outline: none;
        }
        :active{
            border: 1px solid white;
            outline: none;
        }
        border: 1px solid  white;
        border-radius: 25px;
        outline: none;
    }
    .ant-btn {
        :hover{
            border: transparent;
        }
        border: 2px solid white;
        border-top-right-radius: 25px !important;
        border-bottom-right-radius: 25px !important;
    }
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        display: flex;
        text-decoration: none;
        list-style-type: none;
        width: 60%;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        li{
            margin: 0;
            padding: 0;
            p{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.01em;
                color: #FFFFFF;

            }
        }
    }
`