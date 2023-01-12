import events from '../events.js'

// & initiates startup state

const startup = (() => {
    // data
    let sampleData = [];

    // methods
    function startup(loadLocalData, loadDefaultData) {
        events.publish('setCountersOnPageLoad', '');  // subscribed by library.js, 
        if (loadLocalData === true) {
            console.log('loading localStorage ...')
            events.publish('openGetLocalDataQuery', '');
        } else if (loadDefaultData === true) {
            // work with sample data ^^^
        }
        // if localStorage NOT available, page loads blank
    }
    function _loadLocalData(array) {
        for (let i = 0; i < (array.length); i++) {
            let item = array[i];
            console.log(item);
            // publish event based on needs
        }
    }

    // event subscriptions
    events.subscribe('storageCheckComplete', startup); // published by local.js (check())
    events.subscribe('closeGetStartupDataQuery', _loadLocalData); // published by library.js (...)

})();

export default startup;