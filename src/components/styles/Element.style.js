import styled from 'styled-components';

// App Component
export const Main = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Container = styled.section`
    background-color: var(--white-color);
    box-shadow: 0 0 15px 0px #22222287;
    padding: 20px;
    border-radius: 5px;
    max-width: 90vw;
    min-width: 450px;
    h2 {
        color: var(--dark-color);
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 300;
    }
`;

// List Component
export const BirthdayList = styled.article`
    display: grid;
    grid-template-columns: 100px 1fr;
    justify-content: center;
    align-content: center;
    padding: 10px;
    img {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        object-fit: cover;
    }
`;

export const ListDetails = styled.div`
    display: grid;
    align-content: center;
    h3 {
        font-size: 18px;
        color: var(--dark-color);
        margin-bottom: 5px;
        font-weight: 600;
    }
    p {
        font-size: 14px;
        color: var(--birth-color);
    }
`;
