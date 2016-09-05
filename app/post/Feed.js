import React from 'react';

import Radium from 'radium';

const Feed = (props) =>
    <div style={style}>
        {props.children}
    </div>;

Feed.propTypes = {

};

const style = {
    display: 'flex',
    flexFlow: 'column',
    width: '100%'
};

export default Radium(Feed);