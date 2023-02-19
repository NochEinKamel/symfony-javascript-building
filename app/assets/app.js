/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ReactTest } from './ReactTest.jsx';
import '@AcmeTest/bundle.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const appApps = document.querySelectorAll('.AppApp');
    if (appApps.length > 0) {
        appApps.forEach(container => {
            const root = ReactDOMClient.createRoot(container);
            root.render(<ReactTest />);
        });
    }
});