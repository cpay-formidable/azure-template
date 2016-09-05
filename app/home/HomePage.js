import React from 'react';
import Radium from 'radium';
import Container from './Container';
import TabBar from './TabBar';
import Post from '../post/Post';
import Feed from '../post/Feed';

const HomePage = () =>
    <div>
        <div style={styles.base}>
            <Container>
                <div style={styles.headerCell}>
                    <h1>Matt Cubitt</h1>
                    <p>Full-stack engineer specialising in React, Angular, ES6/ES7 and NodeJS web applications.</p>
                    <a href="https://github.com/mattcubitt">https://github.com/mattcubitt</a>
                </div>
                <div style={styles.imgCell}>
                    <img style={styles.img} src="https://avatars1.githubusercontent.com/u/6714912?v=3&s=460" alt="Photo of me"/>
                </div>
            </Container>
            <Container>
                <TabBar/>
            </Container>
        </div>
        <Container>
            <Feed>
                <Post/>
            </Feed>
        </Container>
    </div>;

const styles = {
    base: {
        backgroundColor: 'white',
        padding: '3em 0 0',
        boxShadow: 'rgba(216, 216, 216, 0.5) 0px 2px 1px -1px'
    },
    headerCell: {
        flex: 5
    },
    imgCell: {
        flex: 1
    },
    img: {
        borderRadius: '100%',
        width: '80px',
        height: '80px'
    }
};

export default Radium(HomePage);