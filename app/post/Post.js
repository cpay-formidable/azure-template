import React from 'react';
import Radium from 'radium';
import PostHeader from './PostHeader';
import PostBody from './PostBody';

const Post = () =>
    <div style={style}>
        <PostHeader title={'Object Document Mappers with ES6 Classes'} date={'Aug 13, 2016'}/>
        <PostBody />
    </div>;

const style = {
    margin: '1em 0',
    padding: '0.75em 0.5em 0',
    border: '1px solid #efefef',
    width: '100%',
    backgroundColor: '#ffffff',
    flex: 1
};

export default Radium(Post);