import React from 'react';
import Radium from 'radium';
import { strongText  } from '../styles/fontStyles';

const TabBar = () =>
    <div style={style}>
        <div style={strongText}>Latest</div>
    </div>;

const style = {
    margin: '1em 0',
    padding: '0.75em 0.5em 0',
    borderTop: '1px solid #efefef',
    width: '100%'
};

export default Radium(TabBar);