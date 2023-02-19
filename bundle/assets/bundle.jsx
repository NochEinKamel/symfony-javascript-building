import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Form } from '@AcmeTest/stories/Form.jsx';
import { Header } from '@AcmeTest/stories/Header.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const formApps = document.querySelectorAll('.bundleFormApp');
    if (formApps.length > 0) {
        formApps.forEach(container => {
            const root = ReactDOMClient.createRoot(container);
            root.render(<Form />);
        });
    }

    const headerApps = document.querySelectorAll('.bundleHeaderApp');
    if (headerApps.length > 0) {
        headerApps.forEach(container => {
            const root = ReactDOMClient.createRoot(container);
            root.render(<Header />);
        });
    }    
});