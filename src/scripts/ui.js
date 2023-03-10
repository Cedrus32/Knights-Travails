import events from './events.js';
import create from './create.js';
import iconsArray from './icons.js';

// & generates and updates ui

const ui = (() => {
    // cache DOM
    let controlContainer = document.getElementById('controls');
    let controlButtons;  // cached after creation
    let movesCount; // cached after creation
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
        movesCount = document.getElementById('moves');
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
            topLayer.addEventListener('click', checkKnight);
        } else if (placementType == 1) {
            topLayer.addEventListener('click', checkEnd);
        }
    }
    function removeBoardClicks(placementType) {
        if (placementType == 0) {
            topLayer.removeEventListener('click', checkKnight);
        } else if (placementType == 1) {
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
        if (middleLayer.children.length === 0) {
            middleLayer.append(knight);
        }
        setKnightPosition(cellID);
    }
    function setKnightPosition(id) {
        knight.style.top = `calc((${id[1]} * 10vh) + 4px)`;
        knight.style.left = `calc((${id[0]} * 10vh) + 4px)`;
        let cell = getBottomCell(id);
        formatDoublePlacement(cell);
    }
    function changeKnightPosition(id, step) {
        let j = 0;
        let legInterval = setInterval(() => {
            if (j === 2) {
                clearInterval(legInterval);
            } else {
                if (j === 0) {
                    knight.style.left = `calc((${id[0]} * 10vh) + 4px)`;
                } else if (j === 1) {
                    knight.style.top = `calc((${id[1]} * 10vh) + 4px)`;
                    setTimeout(() => {
                        let cell = getBottomCell(id);
                        formatDoublePlacement(cell);
                        addStepHighlight(id);
                        updateMovesCount(step);
                    }, 250);
                }
                j++;
            }
        }, 500);

    }
    function removeKnightClass(cellID) {
        let cell = getBottomCell(cellID);
        cell.classList.remove('knight-placed');
    }
    function placeEndClass(cellID) {
        let cell = getBottomCell(cellID);
        cell.classList.add('end-placed');
        if (cell.classList.length > 3) {
            formatDoublePlacement(cell);
        }
    }
    function removeEndClass(cellID) {
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
        if (cell.classList.contains('end-placed')) {
            knight.src = iconsArray['knight-purple'];
        } else {
            knight.src = iconsArray['knight-green'];
        }
    }
    function clearBoard(knightID, endID, idArray) {
        if (knightID !== undefined) {
            if (knight.classList.contains('animate')) {
                knight.classList.remove('animate');
            }
            middleLayer.removeChild(middleLayer.children[0]);
            removeKnightClass(knightID);
        }
        if (endID !== undefined) {
            removeEndClass(endID);
        }
        if (idArray !== undefined) {
            removeStepHighlight(idArray);
        }
        resetMovesCount();
    }
    // path methods
    function displayPath(steps, idArray) {
        if (steps === 0) {
            updateMovesCount(steps);
        } else {
            knight.classList.add('animate');
            let i = 1;
            let moveInterval = setInterval(() => {
                if (i > steps) {
                    clearInterval(moveInterval);
                } else {
                    changeKnightPosition(idArray[i], i);
                    i++;
                }
            }, 1000);
        }
    }
    function updateMovesCount(step) {
        if (String(step).length < 2) {
            step = '0' + step;
        }
        let text = [...movesCount.textContent];
        for (let i = 0; i < (String(step).length); i++) {
            text.splice((text.length - 1), 1);
        }
        text.push(step);
        movesCount.textContent = text.join('');
    }
    function resetMovesCount() {
        let text = [...movesCount.textContent];
        text.splice(text.length - 2, 2);
        text.push('--');
        movesCount.textContent = text.join('');
    }
    function addStepHighlight(id) {
        let cell = getBottomCell(id);
        cell.classList.add('traversed');
    }
    function removeStepHighlight(idArray) {
        for (let i = 1; i < (idArray.length); i++) {
            let cell = getBottomCell(idArray[i]);
            cell.classList.remove('traversed');
        }
    }

    // event subscriptions
    events.subscribe('updateButtons', updateButtons);   // published by state.js
    events.subscribe('placementOn', addBoardClicks);   // published by state.js
    events.subscribe('placementOff', removeBoardClicks);    // published by state.js
    events.subscribe('placeKnight', placeKnight);   // published by state.js
    events.subscribe('removeKnightClass', removeKnightClass); // published by state.js
    events.subscribe('placeEnd', placeEndClass); // published by state.js
    events.subscribe('removeEnd', removeEndClass);   // published by state.js
    events.subscribe('clearBoard', clearBoard); // published by state.js
    events.subscribe('displayPath', displayPath); // published by logic.js

    // make public
    return {
        init,   // used by index.js
    }

})();

export default ui;