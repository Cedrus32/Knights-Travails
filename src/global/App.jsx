import { useEffect } from 'react';
import ActionLog from '../components/ActionLog';
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
            <ActionLog />
            <Gameboard />
        </>
    )
};

export default App;
