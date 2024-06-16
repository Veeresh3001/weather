import styled from "styled-components";

export const MainCard = styled.div`
  background-image: linear-gradient(#cfdff7, #5b6d96);
  background-image: linear-gradient(
    ${(props) =>
      props.mode === "true" ? "#171718, #5b5c5f" : "#cfdff7, #5b6d96"}
  );
  height: 100vh;
  width: 100%;
`;

export const LogoHead = styled.h1`
  color: ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  font-size: 35px;
  text-shadow: 1px 1px 5px
    ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const CityName = styled.h1`
  color: ${(props) => (props.mode === "true" ? "#ffffff" : "#171718")};
  font-size: 40px;
  text-decoration: underline;
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HeaderCard = styled.div`
  height: 10vh;
  border-bottom: 1px solid
    ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SearchInp = styled.input`
  height: 45px;
  width: 400px;
  padding-left: 10px;
  font-size: 16px;
  color: ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  outline: none;
  background-color: transparent;
  @media screen and (max-width: 480px) {
    height: 30px;
    width: 180px;
    padding-left: 6px;
    font-size: 15px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 40px;
    width: 250px;
    padding-left: 8px;
    font-size: 16px;
  }
`;
export const ModeButton = styled.button`
  box-shadow: 1px 1px 5px
    ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  padding: 8px 16px;
  color: ${(props) => (props.mode === "true" ? "#171718" : "#cdd0db")};
  background-color: ${(props) =>
    props.mode === "true" ? "#cdd0db" : "#171718"};
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    padding: 5px 10px;
    border-radius: 6px;
  }
`;

export const TextEl = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const TempEl = styled.p`
  font-size: 60px;
  font-weight: 700;
  color: ${(props) => (props.mode === "true" ? "#ffffff" : "#171718")};
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const SpanEl = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
export const TempCard = styled.div`
  font-size: 60px;
  font-weight: 700;
  color: ${(props) => (props.mode === "true" ? "#cdd0db" : "#171718")};
  color: #1e2432;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const Degree = styled.sup`
  font-size: 20px;
  vertical-align: super;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
