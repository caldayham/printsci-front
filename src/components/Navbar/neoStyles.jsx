import styled from "styled-components";

export const NeoNavContainer = styled.div`
    display: relative;
    height: 40px;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 5;
    color: white;

    transition: all 0.2s ease;
    background-color: rgb(0, 0, 0, 0.95);
    &:hover {
        background-color: rgb(0, 0, 0, 1);
    }
`;

export const NavWrapper = styled.div`
    padding: 0px 22px;
    width: 980px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuList = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: none;
`;

export const SearchWrapper = styled.div`
    padding: 0px 22px;
    width: 980px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchBox = styled.input`

`;