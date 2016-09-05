import React from 'react';
import Radium from 'radium';
import { mutedText, strongText } from '../styles/fontStyles';

const PostHeader = (props) =>
    <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
            <img style={{borderRadius: '100%', width: '30px', height: '30px'}} src="https://avatars1.githubusercontent.com/u/6714912?v=3&s=460" alt="Photo of me"/>
        </div>
        <div style={{flex: 10}}>
            <div style={strongText}>{props.title}</div>
            <div style={mutedText}>{props.date}</div>
        </div>
    </div>;

const style = {

};

export default Radium(PostHeader);