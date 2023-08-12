import { useEffect } from 'react';

const ActionLog = () => {
    console.log('render: ActionLog');
    useEffect(() => {
        console.log('mount: ActionLog');
    }, []);

    return (
        <section id='log' aria-label='board information'>
            <output className='hidden' aria-label='start'></output>
            <output className='hidden' aria-label='end'></output>
            <span className='hidden' aria-label='game status' role='status'></span>
            <ol aria-label='moves' role='log' aria-atomic='false'></ol>
        </section>
    )
};

export default ActionLog;
