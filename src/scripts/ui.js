import events from './events.js';
import create from './create.js';
import iconsArray from './icons.js';

// & generates and updates ui

const ui = (() => {
    // cache DOM
    let controlContainer = document.getElementById('controls');
    let controlButtons;  // cached after creation
    let boardContainer = document.getElementById('board');
    let knight = create.img('', 'knight', '');

    // bind eventListeners
    document.addEventListener('click', e => {
        if (e.target.type === 'button') {
            if (e.target.value == 0 || e.target.value == 1) {
                addBoardHover();
            } else if (e.target.value !== 0 && e.target.value !== 1) {
                removeBoardHover();
            }
            events.publish('updateGameState', e.target.value);  // subscribed by state.js
        };
    });

    // init methods
    function init() {
        genControls();
        controlButtons = document.querySelectorAll('button');
        genBoard();
    }
    function genControls() {
        let controlTitles = ['place knight', 'place end', 'randomize', 'travail', 'clear', '# moves: __'];
        let placeControlContainer = create.div('', '.placement');
        controlContainer.append(placeControlContainer);
        for (let i = 0; i < (controlTitles.length); i++) {
            let control;
            if (i < 5) {
                control = create.button(controlTitles[i], i, '');
            } else {
                control = create.div(controlTitles[i], '#moves');
            }
            if (i < 3) {
                placeControlContainer.append(control);
            } else {
                controlContainer.append(control);
            }
        }
    }
    function genBoard() {
        // ^ bottom layer -- colored board where cell styles (board/background) & placement classes are applied
        // ^ middle layer -- single transparent layer where knight lives
        // ^ top layer -- transparent board where clicks are captured
        
        let bottomLayer = createGridLayer('#bottom');
        let middleLayer = create.div('', '#middle');
        let topLayer = createGridLayer('#top');
        boardContainer.append(bottomLayer, middleLayer, topLayer);
    }
    function createGridLayer(id) {
        let layer = create.div('', id);
        for (let i = 0; i < 8; i++) {
            let row = create.div('', '.row');
            for (let j = 0; j < 8; j++) {
                let cell = create.div('', `#${j}${i}`, '.cell');
                if (id === '#bottom') {
                    if (i === 0 || i % 2 === 0) {
                        // light-dark row
                        if (j === 0 || j % 2 === 0) {
                            cell.classList.add('light');
                        } else {
                            cell.classList.add('dark');
                        }
                    } else {
                        // dark-light row
                        if (j === 0 || j % 2 === 0) {
                            cell.classList.add('dark');
                        } else {
                            cell.classList.add('light');
                        }
                    }
                }
                row.append(cell);
            }
            layer.append(row);
        }
        return layer
    }
    // control methods
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
            boardContainer.classList.add('placing-knight');
            boardContainer.addEventListener('click', checkKnight);
        } else if (placementType == 1) {
            boardContainer.classList.add('placing-end');
            boardContainer.addEventListener('click', checkEnd);
        }
    }
    function removeBoardClicks(placementType) {
        if (placementType == 0) {
            boardContainer.classList.remove('placing-knight');
            boardContainer.removeEventListener('click', checkKnight);
        } else if (placementType == 1) {
            boardContainer.classList.remove('placing-end');
            boardContainer.removeEventListener('click', checkEnd);
        }
    }
    // board methods
    function checkKnight(e) {
        if (e.target.classList.contains('cell')) {
            events.publish('checkKnight', e.target);    // subscribed by state.ui
        }
    }
    function checkEnd(e) {
        if (e.target.classList.contains('cell')) {
            events.publish('checkEnd', e.target);   // subscribed by state.ui
        }
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
    // animate methods
    function animateMoves(steps, idArray) {
        console.log(steps, idArray);
        // ^ for items in idArray...
            // ^ increment move count
            // ^ change knight position to cell id
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
    events.subscribe('animateMoves', animateMoves); // published by state.js

    // make public
    return {
        init,   // used by index.js
    }

})();

export default ui;