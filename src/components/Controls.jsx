import { useEffect } from 'react';
import '../styles/controls.css';

const controls = [
    {name: 'place knight', id: 'start'},
    {name: 'place end', id: 'end'},
    {name: 'randomize'},
    {name: 'step through'},
    {name: 'play'},
    {name: 'clear'},
];

// NOTE: ? watch screen width, toggle small-width styling to <menu> as needed
// <label htmlFor={control.id}>{control.name}</label>
// <input type='text' id={control.id}></input>
// <button type='button'>{control.name}</button>

function generateSet(controlSet) {
    console.log(controlSet);

}

const Controls = () => {
    console.log('render: Controls');
    useEffect(() => {
        console.log('mount: Controls');
    }, [])

    return (
        <menu role='menubar' aria-labelledby='Controls' aria-orientation='vertical'>
            <label>Controls</label>
            {controls.map(set => generateSet(set))}
        </menu>
    )
};

export default Controls;
