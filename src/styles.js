import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.backgroundColor};
    }
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Description = styled.h4`
    text-align: center;
`;

export const ShopImage = styled.img `
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;

`;

export const ListWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductWrapper = styled.div `
    margin: 20px;

    img {
        width: 200px;
        height: 200px;
    }

    p {
        text-align: center;

        &.product-price{
            color: ${(props) => props.theme.mainColor}
        } 
    }
`;

export const ThemeButton = styled.button`
    margin: 20px;
    margin-bottom: 0;
    font-size: 1.5em;
    color: ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.mainColor};
`;

export const SearchBarStyled = styled.input`
    width: 500px;
    display: block;
    margin: 20px auto;
    height: 30px;

`;

export const DetailWrapper = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;

    span {
        font-weight: bold;
        font-size: 1.1em;
    }

    img {
        width: 40%;
        float: left;
        margin-right: 20px;
        
    }
    
    p {vertical-align: middle;}
`;

export const DeleteButtonStyled = styled.p`
    color: ${props => props.theme.red};
    font-style: bold;

    :hover{
        cursor: pointer;
    }
`;

export const NavProduct = styled(NavLink)`
    color: ${props => props.theme.mainColor};

    &.active {
        background-color: ${props => props.theme.mainColor};
        color: ${props => props.theme.backgroundColor};
        margin: 10px;
    }
`;

export const Logo = styled(Link)`
    padding: 10px;

    img {
        width: 80px;
    }
`;