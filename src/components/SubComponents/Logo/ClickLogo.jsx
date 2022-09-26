import { Container, Logo, LogoTitle } from "./styles";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePage } from "../../../redux/currentPageRedux";
import LogoSvg from "./LogoSvg";

const ClickLogo = () => {
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch(changePage("home"))}>
      <Link to={`/home/#`} style={{ textDecoration: "none", color: "white" }}>
        <Logo>
        <LogoSvg size="24" strokeWidth={18}/>
          <LogoTitle>
            Print <br /> Scientific
          </LogoTitle>
        </Logo>
      </Link>
    </Container>
  );
};

export default ClickLogo;
