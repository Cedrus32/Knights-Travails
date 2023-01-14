import events from '../events.js';
import create from './create.js';

// & generates ui

const genUI = (() => {
    // data

    // cache DOM
    let controlContainer = document.getElementById('controls');
    let boardContainer = document.getElementById('board');

    // bind eventListeners
    document.addEventListener('click', e => {
        console.log(e.target)
    });

    // methods
    function init() {
        genControls();
    }

    function genControls() {
        let controls = ['place knight', 'place end', 'randomize', 'travail', 'clear', '# moves: '];
        let placeControls = create.div('', '');
        for (let i = 0; i < (controls.length); i++) {
            let control = create.button(controls[i], i, '');
            console.log(control);
            if (i < 3) {
                placeControls.append(control);
            } else {
                controlContainer.append(control);
            }
        }
    }

    // event subscriptions

    // make public
    return {
        init,   // used by index.js
    }

})();

export default genUI;