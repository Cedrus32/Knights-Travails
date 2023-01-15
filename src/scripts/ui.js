import events from '../events.js';
import create from './create.js';

// & generates ui

const genUI = (() => {
    // data

    // cache DOM
    let controlContainer = document.getElementById('controls');
    let boardContainer = document.getElementById('board');

    // bind eventListeners
    document.addEventListener('click', e => {
        console.log(e.target)
    });

    // methods
    function init() {
        genControls();
        genBoard();
    }
    function genControls() {
        let controls = ['place knight', 'place end', 'randomize', 'travail', 'clear', '# moves: '];
        let placeControls = create.div('', '.placement');
        controlContainer.append(placeControls);
        for (let i = 0; i < (controls.length); i++) {
            let control = create.button(controls[i], i, '');
            console.log(control);
            if (i < 3) {
                placeControls.append(control);
            } else {
                controlContainer.append(control);
            }
        }
    }
    function genBoard() {
        for (let i = 0; i < 8; i++) {
            let row = create.div('', '.row');
            for (let j = 0; j < 8; j++) {
                let cell = create.div('', '.cell');
                if (i === 0 || i % 2 === 0) {
                    // light-dark
                    if (j === 0 || j % 2 === 0) {
                        cell.classList.add('light');
                    } else {
                        cell.classList.add('dark');
                    }
                } else {
                    // dark-light
                    if (j === 0 || j % 2 === 0) {
                        cell.classList.add('dark');
                    } else {
                        cell.classList.add('light');
                    }
                }
                row.append(cell);
            }
            boardContainer.append(row);
        }
    }

    // event subscriptions

    // make public
    return {
        init,   // used by index.js
    }

})();

export default genUI;