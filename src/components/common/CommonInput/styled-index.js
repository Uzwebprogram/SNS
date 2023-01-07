import styled from "styled-components";


export const Commoninput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;

  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: black;
    margin: 10px 0;
  }
  input {
    background: #fff;
    border: none;
    outline: none;
    border-bottom: 1px solid #cccccc;
    width: 96%;
    padding: 10px 10px;
    color: black;
  }
`