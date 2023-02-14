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
    top: 20%;
    left: 0;
    z-index: 1000;
  }
  .navlink {
    text-decoration: none;
    color: #000;
    border: none;
    background: transparent;
    outline: none;
  }
  .modal-contents {
    background: #fff;
    margin-left: 3%;
    width: 358px;
    padding: 20px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
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
