import styled from "styled-components";

export const NeoNavContainer = styled.div`
    display: relative;
    height: 56px;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 5;
    color: white;
    padding-left: calc(50% - 512px);

    transition: all 0.2s ease;
    background-color: rgb(0, 0, 0, 0.95);
    &:hover {
        background-color: rgb(0, 0, 0, 1);
    }
`;

export const NavWrapper = styled.div`
    padding-right:22px;
    padding-left:22px;
    width: 980px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuList = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-left: 0px;
    list-style: none;
    font-size: 14px;
    font-weight: 100;
`;

export const LogoImage = styled.img`
    position: relative;
    top: 17px;
    height: 42px;
    &:hover{
        height: 44px;
        width: 28px;
    }
`;

export const CartIcon = styled.a`
    position: relative;
    top: 10px;
    height: 32px;
    width: 32px;
    color: white;
`;
 
export const ListTextItem = styled.li`
    transition: all 0.2s ease;
    &:hover{
        cursor: pointer;
        text-shadow: 0px 0px 1px white;        
    };
`;

export const SearchWrapper = styled.div`
    padding-top: 2px;
    padding-right:22px;
    padding-left:102px;
    width: 820px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchBar = styled.div`
    border: 0.5px solid rgb(255, 255, 255);
    border-radius: 4px;
    width: 100%;
    height: 20px;
    background-color: transparent;
    display: flex;
`;

export const SearchButton = styled.button`
    width: 24px;
    background: none;
    border: none;
    border-right: 1px solid white;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background: white;
        color: black;
    }
`;

export const SearchBox = styled.input`
    flex: 1;
    border: none;
    background-color: transparent;
    color: rgb(200,200,200);
    font-weight: 100;
    font-size: 12px;
    text-align: center;
    letter-spacing: 2px;

    &:focus{
        color: white;
        font-size: 14px;
        letter-spacing: 0px; 
        text-align: left;
    }
    &:focus::placeholder{
        color: transparent;
    }
`;

export const SearchSelect = styled.button`
    width: 24px;
    background: none;
    border: none;
    border-left: 1px solid white;
    color: white;
    
    display: flex;
    align-items: center;
    justify-content: left;

    &:hover{
        background: white;
        color: black;
    }
`;