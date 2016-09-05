import React from 'react';
import { Radium, Style } from 'radium';

export default () => <Style rules={ResetStyle} />

const ResetStyle = {
    body: {
        fontFamily: 'Lato',
        backgroundColor: '#efefef',
        margin: 0
    },
    'h1, h2, h3, h4, h5, h6, p': {
        margin: 0
    },
    pre: {
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word'
    }
};