import styled from "styled-components";

const Container = styled.div``;

const LogoImageBox = styled.div`
  width: 30px;
  height: 44px;
  padding-right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  display: flex;
  width: 95%;
  transition: all 0.1s ease;
`;

const LogoTitle = styled.h1`
  font-weight: 400;
  font-size: 18px;
  transition: all 0.2s ease;
  line-height: 100%;
  padding-left: 4px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 250px;
  height: 60px;

  &:hover ${LogoTitle} {
    text-shadow: 0px 0px 1px white;   
  }
`;

export { Container, LogoImage, LogoTitle, LogoImageBox, Logo };
