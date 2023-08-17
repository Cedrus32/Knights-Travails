import { useEffect } from 'react';
import '../styles/controls.css';

const controls = [
    {
        group: 'choose placement',
        elements: [
            {name: 'place knight', id: 'start'},
            {name: 'place end', id: 'end'},
            {name: 'randomize'},
        ]
    },
    {
        group: 'show moves',
        elements: [
            {name: 'step through'},
            {name: 'play'},
        ]
    },
    {
        group: 'clear',
        elements: [
            {name: 'clear'},
        ]
    }
];

// NOTE: ? watch screen width, toggle small-width styling to <menu> as needed

function generateSet(controlSet, index) {
    let controls = [];
    if (controlSet.group === 'choose placement' || controlSet.group === 'show moves') {
        let tools = [];
        let orientation;
        controlSet.elements.forEach((item, i) => {
            if (controlSet.group === 'place') {
                orientation = 'vertical';
            } else {
                orientation = 'horizontal';
            }
            if (item.id) {
                tools.push(
                    <li key={'tool' + i}>
                        <label htmlFor={item.id}>{item.name}</label>
                        <input type='text' id={item.id}></input>
                    </li>
                )
            } else {
                tools.push (
                    <li key={'tool' + i}>
                        <button type='button'>{item.name}</button>
                    </li>
                )
            }
        });
        controls.push(
            <ul key={controlSet.group} role='toolset' aria-label={controlSet.group} aria-orientation={orientation}>
                {tools}
            </ul>
        );
    } else {
        controls.push(
            <button key={controlSet.group} type='button'>{controlSet.elements[0].name}</button>
        )
    }

    return (
        <li key={'menu' + index} role='menuitem'>
            {controls}
        </li>
    )
}

const Controls = () => {
    console.log('render: Controls');
    useEffect(() => {
        console.log('mount: Controls');
    }, [])

    return (
        <menu role='menubar' aria-labelledby='Controls' aria-orientation='vertical'>
            <label>Controls</label>
            {controls.map((set, i) => generateSet(set, i))}
        </menu>
    )
};

export default Controls;
