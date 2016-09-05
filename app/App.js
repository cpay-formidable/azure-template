import React from 'react';
import { render } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw!./post/test.md';
import HomePage from './home/HomePage';
import Reset from './Reset';
import { StyleRoot } from 'radium';

render(
    <StyleRoot>
        <Reset />
        <HomePage/>
    </StyleRoot>
    ,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}