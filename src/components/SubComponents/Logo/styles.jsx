import styled from "styled-components";

const Container = styled.div``;

const LogoImageBox = styled.div`
  width: 48px;
  height: 48px;
  padding-right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  display: flex;
  width: 90%;
  transition: all 0.1s ease;
`;

const LogoTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  transition: all 0.2s ease;
  line-height: 80%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 250px;
  height: 60px;

  &:hover ${LogoImage} {
    width: 100%;
  }
  &:hover ${LogoTitle} {
    font-size: 26px;
  }
`;

export { Container, LogoImage, LogoTitle, LogoImageBox, Logo };
