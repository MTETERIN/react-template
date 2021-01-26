// @flow
import React, { Component } from 'react';
import Routes from './routes/Routes';


// Themes
import './assets/scss/Saas.scss';

type AppProps = {};

/**
 * Main app component
 */
class App extends Component<AppProps> {
    render() {
        return <Routes></Routes>;
    }
}

export default App;
