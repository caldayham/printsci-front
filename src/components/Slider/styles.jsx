import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: rgb(0,0,0);
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;

  cursor: pointer;

  z-index: 2;

  transition: all 0.2s ease;
  &:hover {
    background-color: rgb(14, 14, 14);
    color: rgb(255, 255, 255);
  }
`;

const Wrapper = styled.div`
  display: flex;
  transition: all 0.8s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background-color: rgb(0, 0, 0);
  padding-bottom: 40px;
`;
const ImgContainer = styled.div`
  flex: 2;
  max-width: 800px;
  min-width: 600px;
  margin-left: 80px;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  max-width: 500px;
  min-width: 400px;
  padding: 50px;
  margin-right: 80px;
  color: rgb(255,255,255);
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
};
