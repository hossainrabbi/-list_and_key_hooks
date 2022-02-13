import { useEffect, useState } from 'react';
import data from '../data';
import List from './List';
import { Container, Main } from './styles/Element.style';
import GlobalStyle, { Button } from './styles/Global.style';

function App() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        setUserList(data);
    }, []);

    return (
        <Main>
            <GlobalStyle />
            <Container>
                <h2>{userList.length} - Diploma Students</h2>
                {userList.map((item) => (
                    <List {...item} key={item.id} />
                ))}
                <Button
                    disabled={!userList.length}
                    onClick={() => userList.length && setUserList([])}
                    allData={userList.length}
                >
                    Clear All
                </Button>
            </Container>
        </Main>
    );
}

export default App;
