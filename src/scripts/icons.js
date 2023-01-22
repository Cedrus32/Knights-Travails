// cache images
let imgQuery = require.context('../icons', false, /\.(png|svg|jpg|jpeg|gif)$/i);
let iconsArray = importIcons(imgQuery);

// methods
function importIcons(r) {
    let queryKeys = r.keys();
    let icons = [];
    for (let i = 0; i < queryKeys.length; i++) {
        let newKey = queryKeys[i].split('.svg')[0].split('./')[1];
        let newValue = `./icons/${queryKeys[i].split('./')[1]}`;
        
        icons[newKey] = newValue;
    };

    return icons;
}

export default iconsArray;