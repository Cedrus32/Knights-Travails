import { useEffect } from 'react';
import Controls from '../components/Controls';
import Gameboard from '../components/Gameboard';

const App = () => {
    console.log('render: App');
    useEffect(() => {
        console.log('mount: App');
    }, []);

    return (
        <>
            <Controls />
            <Gameboard />
        </>
    )
};

export default App;
