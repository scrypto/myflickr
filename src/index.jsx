import React from 'react';
import { render } from 'react-dom';
import Header from './containers/header';
import Cards from './containers/cards';
import { Provider } from 'react-redux';
import store from './store';
import style from './styles/styles.scss';

class App extends React.Component{
    render(){
        return (
            <>
                <Header />
                <Cards />
            </>
        );
    }
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);