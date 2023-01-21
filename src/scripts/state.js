import events from './events.js';

// & stores app state

const state = (() => {
    // data
    let currentState;
    let previousState;
    let knightPlaced = false;
    let endPlaced = false;
    let knight;
    let end;
    let pathSteps;

    // methods
    function updateGameState(value) {
        value = parseInt(value);
        if ((currentState === 3 && value === 4) || (value === 3 && knightPlaced === true && endPlaced === true) || value !== 3) {
            previousState = currentState;
            currentState = value;
            
            // button state
            events.publish('updateButtons', currentState, previousState); // subscribed by ui.js

            // board state
            if (currentState === 0 || currentState === 1) {
                events.publish('placementOn', currentState);  // subscribed by ui.js
            }
            if (previousState === 0 || previousState === 1) {
                events.publish('placementOff', previousState);  // subscribed by ui.js
            }
            if (currentState === 2) {
                let knightID = randomizeID();
                let endID = randomizeID();
                checkKnight(knightID);
                checkEnd(endID);
            }
            if (currentState === 3) {
                let knightCoords = getCoords(knight);
                let endCoords = getCoords(end);
                events.publish('travailBoard', knightCoords, endCoords);    // subscribed by logic.js
            }
            if (currentState === 4) {
                events.publish('clearBoard', knight, end, pathSteps); // subscribed by ui.js
                knightPlaced = false;
                endPlaced = false;
                knight = undefined;
                end = undefined;
                pathSteps = undefined;
            }
        }
    }
    function checkKnight(id) {
        if ((knight !== undefined && id !== knight) || knight === undefined) {
            if (knightPlaced === false) {
                knightPlaced = true;
            }
            if (knight !== undefined) {
                events.publish('removeKnightClass', knight);   // subscribed by ui.js   
            }
            knight = id;
            events.publish('placeKnight', knight);  // subscribed by ui.js
        }
    }
    function checkEnd(id) {
        if ((end !== undefined && id !== end) || end === undefined) {
            if (endPlaced === false) {
                endPlaced = true;
            }
            if (end !== undefined) {
                events.publish('removeEnd', end);   // subscribed by ui.js
            }
            end = id;
            events.publish('placeEnd', end); // subscribed by ui.js
        }
    }
    function randomizeID() {
        let id = '';
        for (let i = 0; i < 2; i++) {
            let number = Math.floor(Math.random() * 8);
            id += number;
        }
        return id;
    }
    function getCoords(cellID) {
        let id = [];
        for (let i = 0; i < (cellID.length); i++) {
            id.push(parseInt(cellID[i]));
        }
        return id;
    }
    function logPathSteps(steps) {
        pathSteps = steps;
    }

    // event subscriptions
    events.subscribe('updateGameState', updateGameState);   // published by ui.js
    events.subscribe('checkKnight', checkKnight); // published by ui.js
    events.subscribe('checkEnd', checkEnd);   // published by ui.js
    events.subscribe('logPathSteps', logPathSteps); // subscribed by state.js

})();

export default state;