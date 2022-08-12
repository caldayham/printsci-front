import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { AmountContainer, Amount } from "./styles";

const ProductAmount = ({ quantity, change }) => {
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && change(quantity - 1);
    } else {
      quantity < 20 && change(quantity + 1);
    }
  };

  return (
    <AmountContainer>
      <Remove onClick={() => handleQuantity("dec")} />
      <Amount>{quantity}</Amount>
      <Add onClick={() => handleQuantity("inc")} />
    </AmountContainer>
  );
};

export default ProductAmount;
