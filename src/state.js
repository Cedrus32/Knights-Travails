import events from './events.js';

// & stores app state

const state = (() => {
    // data
    let currentState;
    let previousState;
    let knightPlaced;
    let endPlaced;
    let knight;
    let end;

    // methods
    function updateState(value) {
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
        }
    }
    function checkKnight(cell) {
        if ((knight !== undefined && cell.id !== knight.id) || knight === undefined) {
            if (knight !== undefined) {
                events.publish('removeKnight', knight);   // subscribed by ui.js   
            }
            knight = cell;
            events.publish('placeKnight', knight);  // subscribed by ui.js
        }
    }
    function checkEnd(cell) {
        if ((end !== undefined && cell.id !== end.id) || end === undefined) {
            if (end !== undefined) {
                events.publish('removeEnd', end);   // subscribed by ui.js
            }
            end = cell;
            events.publish('placeEnd', end); // subscribed by ui.js
        }
    }

    // event subscriptions
    events.subscribe('updateState', updateState);   // published by ui.js
    events.subscribe('checkKnight', checkKnight); // published by ui.js
    events.subscribe('checkEnd', checkEnd);   // published by ui.js

})();

export default state;