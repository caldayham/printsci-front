import React, { useState } from "react";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./styles";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {

  const [boxMessage, changeBoxMessage] = useState("Your email here");

  function handleEmail() {
    changeBoxMessage("Thank you")
  }

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Constantly improving. We never spam email.</Desc>
      <InputContainer>
        <Input placeholder={boxMessage} onChange={() => handleEmail()}/>
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
