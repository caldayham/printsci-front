import React from "react";
import {
  NeoNavContainer,
  NavWrapper,
  SearchWrapper,
  SearchBar,
  MenuList,
  SearchBox,
  SearchButton,
  SearchSelect,
  ListTextItem,
  LogoImage,
  CartIcon,
} from "./neoStyles.jsx";

import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const NeoNavbar = () => {

  return (
    <NeoNavContainer>
        <NavWrapper>
            <MenuList>
              <li>
                <a href="https://printscientfic.com" style={{maxWidth:"42px", overflow: "hidden"}}>
                  <LogoImage src="favicon.ico" />
                </a>
              </li>
              <ListTextItem>catalog</ListTextItem>
              <ListTextItem>anesthesia</ListTextItem>
              <ListTextItem>dental</ListTextItem>
              <ListTextItem>custom</ListTextItem>
              <ListTextItem>hardware</ListTextItem>
              <ListTextItem>mission</ListTextItem>
              <ListTextItem>support</ListTextItem>
              <ListTextItem>account</ListTextItem>
              <li >
                <CartIcon href="https://printscientfic.com">
                  <ShoppingBagOutlinedIcon/>
                </CartIcon>
              </li>
            </MenuList>
        </NavWrapper>
        <SearchWrapper>
          <SearchBar>
            <SearchButton>
              <SearchIcon style={{height: "20px"}}/>
            </SearchButton>
            <SearchBox type="search" placeholder="/  to  make  it  happen"/>
            <SearchSelect>
              <ArrowBackIosIcon style={{height: "16px"}}/>
            </SearchSelect>
          </SearchBar>
        </SearchWrapper>
    </NeoNavContainer>
    )
}

export default NeoNavbar