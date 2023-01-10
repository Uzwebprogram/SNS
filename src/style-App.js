import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.div`
  display: flex;
`;
export const GlobalStyle = createGlobalStyle`

  html{
    scroll-behavior:smooth
    }
    
  body {
    margin: 0;
    padding: 0;
    font-family: 'Gilroy';
    overflow-x: hidden;
    background-color: #F5F5F5;

    @media only screen and (max-width: 425px) {
      background-color: #fff;
    }
  }
`;

export const WrapperContainer = styled.div`
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 1221px) {
    width: 95%;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;
