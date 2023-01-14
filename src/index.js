import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';
import events from './events.js';
import iconsArray from './scripts/icons.js';
import knights from './knights.js';
import genUI from './scripts/ui.js';

// import Img from './img.png';
// import XmlData from './data.xml';
// import CsvData from './data.csv';

// manager function here

genUI.init();
knights.findShortestPath([0, 0], [3, 4]);
