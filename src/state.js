import events from './events.js';

// & stores app state

const state = (() => {
    // data
    let currentState;
    let previousState;
    let knightPlaced;
    let endPlaced;

    // methods
    function updateState(value) {
        value = parseInt(value);
        if ((currentState === 3 && value === 4) ||
            (value === 3 && knightPlaced === true && endPlaced === true) ||
            value !== 3) {
            previousState = currentState;
            currentState = value;
            events.publish('updateButtons', currentState, previousState); // subscribed by ui.js
        }
    }

    // event subscriptions
    events.subscribe('updateState', updateState);   // published by ui.js

})();

export default state;