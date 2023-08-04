import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './global/App';

import './styles/reset.css';
import './styles/layout.css';
import './styles/typo.css';
import './styles/shaping.css';
import './styles/colors.css';
// import state from './scripts/state.js';
// import logic from './scripts/logic.js';
// import ui from './scripts/ui.js';

// ui.init();
// logic.findShortestPath([0, 0], [3, 4]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
