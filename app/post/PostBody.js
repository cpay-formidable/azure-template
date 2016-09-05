import React from 'react';
import Radium from 'radium';
import ReactMarkdown from 'react-markdown';
import raw from 'html!markdown!./test.md';

const PostBody = () =>
    <div style={style}>
        <ReactMarkdown source={raw} />
    </div>;

const style = {
    ':before': {
        content: '',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        background: 'linear-gradient(transparent 150px, white)'
    }
};

export default Radium(PostBody);