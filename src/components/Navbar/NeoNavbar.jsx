import React from "react";
import {
  NeoNavContainer,
  NavWrapper,
  SearchBar,
  MenuList,
  SearchBox,
  SearchButton,
  SearchSelect,
  ListTextItem,
  CartIcon,
  NavMenuSearch,
} from "./neoStyles.jsx";

import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ClickLogo from "../SubComponents/Logo/ClickLogo.jsx";

const NeoNavbar = () => {

  return (
    <NeoNavContainer>
        <NavWrapper>

          <ClickLogo/>

          <NavMenuSearch>
            <MenuList>
              <ListTextItem to="/catalog">catalog</ListTextItem>
              <ListTextItem to="/catalog">anesthesia</ListTextItem>
              <ListTextItem to="/catalog">dental</ListTextItem>
              <ListTextItem to="/custom">custom</ListTextItem>
              <ListTextItem to="/catalog">hardware</ListTextItem>
              <ListTextItem to="/research">research</ListTextItem>
              <ListTextItem to="/about">mission</ListTextItem>
              <ListTextItem to="/support">support</ListTextItem>
              <ListTextItem to="/account">account</ListTextItem>
            </MenuList>
          <SearchBar>
            <SearchButton>
              <SearchIcon style={{height: "20px"}}/>
            </SearchButton>
            <SearchBox type="search" placeholder="/  to  make  it  happen"/>
            <SearchSelect>
              <ArrowBackIosIcon style={{height: "16px"}}/>
            </SearchSelect>
          </SearchBar>
          </NavMenuSearch>

          <CartIcon to="/cart">
            <ShoppingBagOutlinedIcon/>
          </CartIcon>

        </NavWrapper>
    </NeoNavContainer>
    )
}

export default NeoNavbar