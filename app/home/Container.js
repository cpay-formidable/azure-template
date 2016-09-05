import React from 'react';
import Radium from 'radium';

const Container = (props) =>
    <div style={style}>
        {props.children}
    </div>;

const style = {
    paddingLeft: '24px',
    paddingRight: '24px',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    '@media only screen and (min-width : 500px)': {
        width: '500px'
    }
};

export default Radium(Container);