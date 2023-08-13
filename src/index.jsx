import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './global/App';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
