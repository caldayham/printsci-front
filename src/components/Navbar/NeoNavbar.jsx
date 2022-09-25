import React from "react";
import {
  NeoNavContainer,
  NavWrapper,
  SearchWrapper,
  SearchBox,
  MenuList,
} from "./neoStyles.jsx";

import { useSelector } from "react-redux";

const NeoNavbar = () => {

    const quantity = useSelector((state) => state.cart.quantity);

  return (
    <NeoNavContainer>
        <NavWrapper>
            <MenuList>
              <li>
                <a>icon</a>
              </li>
              <li>
                catalog
              </li>
            </MenuList>
        </NavWrapper>
        <SearchWrapper>
          <SearchBox></SearchBox>
        </SearchWrapper>
    </NeoNavContainer>
    )
}

export default NeoNavbar