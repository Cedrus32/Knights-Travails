import events from '../events.js';
import create from './create.js';

// & generates ui

const genUI = (() => {
    // cache DOM
    let controlContainer = document.getElementById('controls');
    let controlButtons;  // cached on creation
    let boardContainer = document.getElementById('board');

    // bind eventListeners
    document.addEventListener('click', e => {
        if (e.target.type === 'button') {
            if (e.target.value == 0 || e.target.value == 1) { // place knight OR place end
                boardContainer.addEventListener('mouseover', addBoardHover);
            }
            // ^ remove addBoardHover event listener
            events.publish('updateState', e.target.value);  // subscribed by state.js
        };
    });

    // methods
    function init() {
        genControls();
        controlButtons = document.querySelectorAll('button');
        genBoard();
    }
    function genControls() {
        let controlTitles = ['place knight', 'place end', 'randomize', 'travail', 'clear', '# moves: '];
        let placeControlContainer = create.div('', '.placement');
        controlContainer.append(placeControlContainer);
        for (let i = 0; i < (controlTitles.length - 1); i++) {   // ! -1 for testing only, re-adjust later to include 'moves'
            let controlButton = create.button(controlTitles[i], i, '');
            if (i < 3) {
                placeControlContainer.append(controlButton);
            } else {
                if (i === 5) {
                    controlButton.id = 'moves';
                }
                controlContainer.append(controlButton);
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
    function updateButtons(currentState, previousState) {
        if (currentState === 3) {
            // disable placement controls
            for (let i = 0; i < 3; i++) {
                controlButtons[i].disabled = true;
            }
        }
        if (currentState === 4) {
            // enable placement controls
            for (let i = 0; i < 3; i++) {
                controlButtons[i].disabled = false;
            }
        }
        if (previousState !== undefined) {  // disregards first click (no previous state)
            controlButtons[previousState].ariaPressed = false;
            controlButtons[previousState].classList.remove('pressed');
        }
        controlButtons[currentState].ariaPressed = true;
        controlButtons[currentState].classList.add('pressed');
    }
    function addBoardHover(e) {
        if (e.target.classList.contains('cell')) {
            // ^ add border on mouse-enter
            // ^ remove border on mouse-exit
        }
    }

    // event subscriptions
    events.subscribe('updateButtons', updateButtons);   // published by state.js

    // make public
    return {
        init,   // used by index.js
    }

})();

export default genUI;