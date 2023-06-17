import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 920px) {
    display: ${(props) => (props.SearchModal ? "block" : "none")};
  }
  .search {
    background: #ffffff;
    border-radius: 7px;
    padding: 10px;
    width: 85%;
  }

  .modals {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: transparent;
    top: 14%;
    left: 0;
    z-index: 1000;
  }
  .navlink {
    text-decoration: none;
    color: #000;
    border: none;
    background: transparent;
    outline: none;
    margin-bottom : 10px
  }
  .navlink-href {
    text-decoration: none;
    color: #000;
    border: none;
    background: transparent;
    margin-top:10px;
  }
  .padding-header{
    margin : 0px;
    padding : 0px;
    font-size : 20px;
    font-weight : 700;
  }
  hr{
    margin: 0;
    padding: 0;
  }
  .modal-contents {
    background: #fff;
    margin-left: 3%;
    width: 320px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 3px 8px #888888;
  }
  .nomodals {
    display: none;
  }
`;
export const Overlay = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100vh;
`;
