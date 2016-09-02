import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import { render } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw!./posts/test.md';

render(
    <ReactMarkdown source={raw} />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}