import styled from "styled-components";

export const HeroSection = styled.div`
  /* padding: 100px 0 0 0; */
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    padding: 170px 0;
  }
  @media only screen and (max-width: 512px) {
    padding: 175px 0;
  }
  @media only screen and (max-width: 426px) {
    padding: 180px 0;
  }
  @media only screen and (max-width: 378px) {
    padding: 185px 0;
  }
  @media only screen and (max-width: 320px) {
    padding: 190px 0;
  }

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    top: 0;
  }
`;

export const Button = styled.button`
  background: #2f66b8;
  border-radius: 50px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0 auto;
  z-index: 2;

  @media only screen and (max-width: 320px) {
    font-size: 16px;
  }
`;
