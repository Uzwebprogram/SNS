import styled from "styled-components";


export const Wrapper = styled.div`
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
::-webkit-scrollbar {
  width: 3px;
}
.top{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  h2{
    margin: 0;
    padding: 0;
  }
  span{
    font-size: 40px;
    cursor: pointer;
  }
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #2F66B8;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    .left-button{
        background-color: transparent;
        border: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.01em;
        color: #1E1E1E;
        cursor: pointer;
        padding-right: 43px;
        @media only screen and (max-width:520px) {
        padding-right: 23px;
        font-size: 12px;
        }
    }
    .right-button{
        border: none;
        background: #2F66B8;
        border-radius: 20px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        padding: 11px 47px;
        cursor: pointer;
        @media only screen and (max-width:826px) {
        padding: 11px 37px;
        font-size: 12px;
        }
    }
    .buttons{
        background: #F0F0F0;
        border: 1px solid #BBBBBB;
        border-radius: 20px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width:826px) {
            width: 80% !important;
        }
    }
    h2{
        text-align: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #1E1E1E;
    }
`