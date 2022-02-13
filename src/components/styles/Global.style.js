import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: #F28AB2;
        --white-color: #ffffff;
        --dark-color: #222222;
        --birth-color: #145145;
        --disable-color: #cdcdcd;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--main-color);
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    img {
        max-width: 100%;
    }
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 5px;
    cursor: ${({ allData }) => (allData ? 'pointer' : 'no-drop')};
    margin-top: 20px;
    color: var(--white-color);
    background-color: ${({ allData }) =>
        allData ? 'var(--birth-color)' : 'var(--disable-color)'};
    transition: background-color 0.5s;
    &:hover {
        background-color: ${({ allData }) =>
            allData ? 'var(--main-color)' : 'var(--disable-color)'};
    }
`;

export default GlobalStyle;
