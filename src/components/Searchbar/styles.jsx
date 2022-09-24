import styled from "styled-components";

const SearchbarWrapper = styled.div`
  display: relative;
  height: 48px;
  position: fixed;
  top: 110px;
  width: 100vw;
  z-index: 5;
  color: white;

  transition: all 0.2s ease;
  background-color: rgb(0, 0, 0, 0.95);
  &:hover {
    background-color: rgb(0, 0, 0, 1);
  }
`;

const Left = styled.div`
    flex: 1;
`;
const Center = styled.div`
    flex: 2;
`;
const Right = styled.div`
    flex: 1;
`;

export {
    SearchbarWrapper,
    Left,
    Center,
    Right
};