import React from 'react'

import {
    SearchbarWrapper,
    Left,
    Center,
    Right
 } from './styles'

const Searchbar = () => {
  return (
    <SearchbarWrapper>
        <div style={{display: "flex", height: "100%"}}>
        <Left>left</Left>
        <Center>center</Center>
        <Right>right</Right>
        </div>
    </SearchbarWrapper>
  )
}

export default Searchbar