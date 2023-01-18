import events from '../events.js';
import create from './create.js';
import iconsArray from './icons.js';

// & generates ui

const genUI = (() => {
    // cache DOM
    let controlContainer = document.getElementById('controls');
    let controlButtons;  // cached on creation
    let boardContainer = document.getElementById('board');
    let knight = create.img('', 'knight', '');
    console.log(knight);

    // bind eventListeners
    document.addEventListener('click', e => {
        if (e.target.type === 'button') {
            if (e.target.value == 0 || e.target.value == 1) {
                addBoardHover(e.target.value);
            } else if (e.target.value !== 0 && e.target.value !== 1) {
                removeBoardHover();
            }
            events.publish('updateGameState', e.target.value);  // subscribed by state.js
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
                let cell = create.div('', `#${i}${j}`, '.cell');
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
    function addBoardHover(placementType) {
        boardContainer.classList.add('hover-true');
        if (placementType == 0) {
            if (boardContainer.classList.contains('placing-end')) {
                boardContainer.classList.remove('placing-end');
            }
            boardContainer.classList.add('placing-knight');
        } else if (placementType == 1) {
            if (boardContainer.classList.contains('placing-knight')) {
                boardContainer.classList.remove('placing-knight');
            }
            boardContainer.classList.add('placing-end');
        }
    }
    function removeBoardHover() {
        boardContainer.classList.remove('hover-true');
    }
    function addBoardClicks(placementType) {
        if (placementType == 0) {
            boardContainer.addEventListener('click', checkKnight);
        } else if (placementType == 1) {
            boardContainer.addEventListener('click', checkEnd);
        }
    }
    function removeBoardClicks(placementType) {
        if (placementType == 0) {
            boardContainer.removeEventListener('click', checkKnight);
        } else if (placementType == 1) {
            boardContainer.removeEventListener('click', checkEnd);
        }
    }
    function checkKnight(e) {
        events.publish('checkKnight', e.target);    // subscribed by state.ui
    }
    function checkEnd(e) {
        events.publish('checkEnd', e.target);   // subscribed by state.ui
    }
    function placeKnight(cell) {
        cell.classList.add('knight-placed');
        if (cell.classList.length > 2) {
            formatDoublePlacement(cell);
        }
        cell.append(knight);
    }
    function placeEnd(cell) {
        cell.classList.add('end-placed');
        if (cell.classList.length > 3) {
            formatDoublePlacement(cell);
        }
    }
    function removeKnight(cell) {
        cell.classList.remove('knight-placed');
    }
    function removeEnd(cell) {
        cell.classList.remove('end-placed');
        if (cell.classList.length > 2) {
            formatDoublePlacement(cell);
        }
    }
    function formatDoublePlacement(cell) {
        if (cell.classList.length === 4) {
            knight.src = iconsArray['knight-purple'];
        } else {
            knight.src = iconsArray['knight-green'];
        }
    }
    function clearBoard(knightCell, endCell) {
        if (knightCell !== undefined) {
            removeKnight(knightCell);
            knightCell.removeChild(knightCell.children[0]);
        }
        if (endCell !== undefined) {
            removeEnd(endCell);
        }
    }
    function randomizePlacement(knightID, endID) {
        let knightCell = document.getElementById(knightID);
        let endCell = document.getElementById(endID);
        events.publish('checkKnight', knightCell);  // subscribed by state.ui
        events.publish('checkEnd', endCell);    // subscribed by state.ui
    }

    // event subscriptions
    events.subscribe('updateButtons', updateButtons);   // published by state.js
    events.subscribe('placementOn', addBoardClicks);   // published by state.js
    events.subscribe('placementOff', removeBoardClicks);    // published by state.js
    events.subscribe('placeKnight', placeKnight);   // published by state.js
    events.subscribe('placeEnd', placeEnd); // published by state.js
    events.subscribe('removeKnight', removeKnight); // published by state.js
    events.subscribe('removeEnd', removeEnd);   // published by state.js
    events.subscribe('clearBoard', clearBoard); // published by state.js
    events.subscribe('randomizePlacement', randomizePlacement); // published by state.js

    // make public
    return {
        init,   // used by index.js
    }

})();

export default genUI;