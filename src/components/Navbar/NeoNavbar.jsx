import React, {useEffect, useRef} from "react";
import {
  NeoNavContainer,
  NavWrapper,
  SearchBar,
  MenuList,
  SearchBox,
  SearchButton,
  SearchSelect,
  ListTextItem,
  NavMenuSearch,
  NeoNavIcon,
} from "./neoStyles.jsx";

import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ClickLogo from "../SubComponents/Logo/ClickLogo.jsx";

const NeoNavbar = () => {

  const searchBoxInputRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  },[])

  const detectKeyDown = (e) => {
    if(e.key === "/") { 
      e.preventDefault()
      searchBoxInputRef.current.focus();
    }
  }

  return (
    <NeoNavContainer>
        <NavWrapper>

          <ClickLogo/>

          <NavMenuSearch>
            <MenuList>
              <ListTextItem to="/catalog" selected={true} thispage={"catalog"}>catalog</ListTextItem>
              <ListTextItem to="/catalog/anesthesia" thispage={"anesthesia"}>anesthesia</ListTextItem>
              <ListTextItem to="/catalog/dentistry" thispage={"dentistry"}>dentistry</ListTextItem>
              <ListTextItem to="/catalog/hardware" thispage={"hardware"}>hardware</ListTextItem>
              <ListTextItem to="/custom" thispage={"custom"}>custom</ListTextItem>
              <ListTextItem to="/research" thispage={"research"}>research</ListTextItem>
              <ListTextItem to="/about" thispage={"about"}>about</ListTextItem>
              <ListTextItem to="/support" thispage={"support"}>support</ListTextItem>
              <ListTextItem to="/contact" thispage={"contact"}>contact</ListTextItem>
            </MenuList>
          <SearchBar>
            <SearchButton>
              <SearchIcon style={{height: "20px"}}/>
            </SearchButton>
            <SearchBox 
              type="search" 
              placeholder="/  to  make  it  happen" 
              ref={searchBoxInputRef}
            />
            <SearchSelect>
              <ArrowBackIosIcon style={{height: "16px"}}/>
            </SearchSelect>
          </SearchBar>
          </NavMenuSearch>

          <div style={{display:"flex", height: "100%", gap: "5px"}}>
            <NeoNavIcon to="/account">
              <ManageAccountsOutlinedIcon style={{width: "100%", height: "100%"}}/>
            </NeoNavIcon>
            <NeoNavIcon to="/cart">
              <ShoppingBagOutlinedIcon style={{width: "90%", height: "90%"}}/>
            </NeoNavIcon>
          </div>

        </NavWrapper>
    </NeoNavContainer>
    )
}

export default NeoNavbar