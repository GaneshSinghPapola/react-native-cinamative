import React, { Component } from 'react'
import { Provider } from 'react-redux';
import {setup} from './store';
import RouterComponent from './Routes';
import { createStore, applyMiddleware } from "redux"; 
import reducers from './reducers';
import thunk from 'redux-thunk';

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
console.disableYellowBox = true;
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: null,
        };
    }
    // componentDidMount() {
    //     setup((store) => {
    //         this.setState({
    //             isLoading: false,
    //             store,
    //         });
    //     });
    // }
    render() {
        // if (this.state.isLoading) {
        //     return null;
        // }

        const store = createStore(reducers, applyMiddleware(thunk));
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}