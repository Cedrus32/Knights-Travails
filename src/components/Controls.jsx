import { useEffect } from 'react';

const controls = [
    {name: 'place knight', id: 'start'},
    {name: 'place end', id: 'end'},
    {name: 'randomize'},
    {name: 'step through'},
    {name: 'play'},
    {name: 'clear'},
];

// NOTE: ? watch screen width, toggle small-width styling to <menu> as needed

const returnElement = (control, i) => {
    if (i < 2) {
        return (
            <li key={i}>
                <label htmlFor={control.id}>{control.name}</label>
                <input type='text' id={control.id}></input>
            </li>
        )
    } else {
        return (
            <li key={i}>
                <button type='button'>{control.name}</button>
            </li>
        )
    }
}

const Controls = () => {
    console.log('render: Controls');
    useEffect(() => {
        console.log('mount: Controls');
    }, [])

    return (
        <menu>
            {controls.map((control, i) => returnElement(control, i))}
        </menu>
    )
};

export default Controls;
