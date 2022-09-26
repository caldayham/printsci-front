import { Link } from "react-router-dom";
import styled from "styled-components";

export const NeoNavContainer = styled.div`
    display: relative;
    height: 56px;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 5;
    color: white;
    padding-left: calc(50% - 430px);

    transition: all 0.2s ease;
    background-color: rgb(0, 0, 0, 0.95);
    &:hover {
        background-color: rgb(0, 0, 0, 1);
    }
`;

export const NavWrapper = styled.div`
    padding: 0px 20px;
    width: 820px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavMenuSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 620px;
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
    margin-top: -5px;
`;

export const CartIcon = styled(Link)`
    height: 100%;
    width: 32px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
 
export const ListTextItem = styled(Link)`
    text-decoration: none;
    color: white;

    transition: all 0.2s ease;
    &:hover{
        cursor: pointer;
        text-shadow: 0px 0px 1px white;     
        border-top:  oarsntrsatartnsrtrsatq rtsra t1px solid white;   
    };

    border-top: ${(props) => (props.selected ? "1px solid white" : "none")};
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