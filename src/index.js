import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//these three lines are a given if you're using redux in your appluication, word for word
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //you don't need curly braces since thunk is the default export from redux-thunk
//this line is needed but the name of the import will change depending on whats in your reducers
//because we're just calling '.reducers', its just going to look for the default file so it's looking for a index.js file, so we need to create that in our reducers folder in addition to the characters.js
import marvelApp from './reducers' //marvelApp is something that is exported from the reducers

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let store = createStore(marvelApp, applyMiddleware(thunk))

ReactDOM.render(
    //the providers goal is to pass a storage to the application
<Provider store={store}> 
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
