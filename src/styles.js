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
    width: 500px;
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
            color: ${(props) => props.theme.cardColor}
        } 
    }
`;