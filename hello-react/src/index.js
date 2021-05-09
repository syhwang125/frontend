import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import App from './App';

// import { createStore} from 'redux';
// import reducers from './reducers';
// import {Provider} from 'react-redux';

const title = React.createElement('h1', null, 'JSX Test');
const test = React.createElement('p',null,'progra,');
const container = React.createElement('div', null, [title, test]);

// const store = createStore(reducers);

// console.log(store.getState());

ReactDOM.render(
    <div>
        <h1>dfadsf</h1>
        <p>dfasfasdf</p>
    </div>,
    // <Provider store={store}>
    //     <App/>
    // </Provider>, 
    document.getElementById('root'));
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
