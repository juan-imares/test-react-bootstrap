import React from 'react';
import Routers from './router';
import { render } from 'react-dom';
import Index from './pages/Index';

render(
    <Routers />,
    document.getElementById('app')
);
