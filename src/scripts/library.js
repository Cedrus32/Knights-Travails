import events from '../events';

// & backend manager module containing project/task classes & methods

const library = (() => {
    // dynamic data
    let itemCount;

    // state methods
    function setCounters() {
        console.log(`previousLoad: ${localStorage.getItem('previousLoad')}`);
        if ((localStorage.getItem('projectCount') === null) || (localStorage.length === 3)) {
            itemCount = 0;
            localStorage.setItem('itemCount', itemCount);
        } else {
            itemCount = parseInt(JSON.parse(localStorage.getItem('itemCount')));
        };
    }
    function checkCounterReset() {
        if (localStorage.length === 3) {
            itemCount = 0;
            localStorage.setItem('itemCount', itemCount);
        }
    }
    function upItemCount() {
        itemCount++;
        localStorage.setItem('itemCount', itemCount);
    }
    function downItemCount() {
        itemCount--;
        localStorage.setItem('itemCount', itemCount);
    }

    // event subscriptions
    events.subscribe('setCountersOnPageLoad', setCounters); // published by startup.js (startup)
    events.subscribe('openGetLocalDataQuery', functionName);    // published by startup.js (startup)
})();