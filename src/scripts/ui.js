import events from '../events.js';
import create from './create.js';
import iconsArray from './icons.js';

// & generates ui

const genUI = (() => {
    // cache DOM
    let controlContainer = document.getElementById('controls');
    let controlButtons;  // cached on creation
    let boardContainer = document.getElementById('board');
    let knightIcon = iconsArray['knight'];
    let endIcon;

    // bind eventListeners
    document.addEventListener('click', e => {
        if (e.target.type === 'button') {
            if (e.target.value == 0 || e.target.value == 1) {
                addBoardHover();
            } else if (e.target.value !== 0 && e.target.value !== 1) {
                removeBoardHover();
            }
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
    function addBoardHover() {
        boardContainer.classList.add('hover-true');
    }
    function removeBoardHover() {
        boardContainer.classList.remove('hover-true');
    }
    function addBoardClicks(placementType) {
        if (placementType == 0) {
            boardContainer.addEventListener('click', placeKnight);
        } else if (placementType == 1) {
            boardContainer.addEventListener('click', placeEnd);
        }
    }
    function removeBoardClicks(placementType) {
        if (placementType == 0) {
            boardContainer.removeEventListener('click', placeKnight);
        } else if (placementType == 1) {
            boardContainer.removeEventListener('click', placeEnd);
        }
    }
    function placeKnight(e) {
        console.log('*** place knight ***')
        console.log(e.target);
    }
    function placeEnd(e) {
        console.log('*** place end ***')
        console.log(e.target);
    }

    // event subscriptions
    events.subscribe('updateButtons', updateButtons);   // published by state.js
    events.subscribe('placementOn', addBoardClicks);   // published by state.js
    events.subscribe('placementOff', removeBoardClicks);    // published by state.js

    // make public
    return {
        init,   // used by index.js
    }

})();

export default genUI;