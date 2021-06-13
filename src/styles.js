import {createGlobalStyle} from "styled-components";
import styled from "styled-components";

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