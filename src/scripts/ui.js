import events from './events.js';
import create from './create.js';
import iconsArray from './icons.js';

// & generates and updates ui

const ui = (() => {
    // cache DOM
    let controlContainer = document.getElementById('controls');
    let controlButtons;  // cached after creation
    let gameboard = document.getElementById('board');
    let bottomLayer;
    let middleLayer;
    let topLayer;
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
        
        bottomLayer = createGridLayer('#bottom');
        middleLayer = create.div('', '#middle');
        topLayer = createGridLayer('#top');
        gameboard.append(bottomLayer, middleLayer, topLayer);
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
        topLayer.classList.add('hover-true');
    }
    function removeBoardHover() {
        topLayer.classList.remove('hover-true');
    }
    function addBoardClicks(placementType) {
        if (placementType == 0) {
            topLayer.classList.add('placing-knight');
            topLayer.addEventListener('click', checkKnight);
        } else if (placementType == 1) {
            topLayer.classList.add('placing-end');
            topLayer.addEventListener('click', checkEnd);
        }
    }
    function removeBoardClicks(placementType) {
        if (placementType == 0) {
            topLayer.classList.remove('placing-knight');
            topLayer.removeEventListener('click', checkKnight);
        } else if (placementType == 1) {
            topLayer.classList.remove('placing-end');
            topLayer.removeEventListener('click', checkEnd);
        }
    }
    // board methods
    function checkKnight(e) {
        if (e.target.classList.contains('cell')) {
            events.publish('checkKnight', e.target.id);    // subscribed by state.ui
        }
    }
    function checkEnd(e) {
        if (e.target.classList.contains('cell')) {
            events.publish('checkEnd', e.target.id);   // subscribed by state.ui
        }
    }
    function placeKnight(cellID) {
        let cell = getBottomCell(cellID);
        cell.classList.add('knight-placed');
        if (cell.classList.length > 2) {
            formatDoublePlacement(cell);
        }
        cell.append(knight);    // ! append to middle layer
    }
    function placeEnd(cellID) {
        let cell = getBottomCell(cellID);
        cell.classList.add('end-placed');
        if (cell.classList.length > 3) {
            formatDoublePlacement(cell);
        }
    }
    function removeKnight(cellID) {
        let cell = getBottomCell(cellID);
        cell.classList.remove('knight-placed');
    }
    function removeEnd(cellID) {
        let cell = getBottomCell(cellID);
        cell.classList.remove('end-placed');
        if (cell.classList.length > 2) {
            formatDoublePlacement(cell);
        }
    }
    function getBottomCell(cellID) {
        let rowIndex = cellID[1];
        let cellIndex = cellID[0];
        let cell = bottomLayer.children[rowIndex].children[cellIndex];
        return cell;
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
        events.publish('checkKnight', knightID);  // subscribed by state.ui
        events.publish('checkEnd', endID);    // subscribed by state.ui
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