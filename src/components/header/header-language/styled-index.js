import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    select{
        background-color: transparent;
        color: black;
        padding: 6px 8px;
        border: none;
        cursor: pointer;
        outline: none;
    }
    select option{
    }
    a{
        background: #FFD700;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;
        color: #000000;
        padding-top: 18px;
        padding-bottom: 19px;
        padding-left: 41px;
        padding-right: 31px;
        text-decoration: none;
}
button{
    display: none;
}
@media only screen and (max-width: 1024px) {
    a{
        padding-top: 18px;
        padding-bottom: 19px;
        padding-left: 15px;
        padding-right: 14px;
}   
}
@media only screen and (max-width: 872px) {
    a{
        padding-top: 18px;
        padding-bottom: 19px;
        padding-left: 15px;
        padding-right: 14px;
    } 
    button{
        display: block;
        background-color: transparent;
        border: none;
    }
}
@media only screen and (max-width: 449px) {
    a{
        padding-top: 18px;
        padding-bottom: 19px;
        padding-left: 10px;
        padding-right: 9px;
        font-size: 18px;
    }
    select{
        background-color: transparent;
        color: black;
        padding: 3px 5px;
        border: none;
        cursor: pointer;
        outline: none;
    }
}
`
