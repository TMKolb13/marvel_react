import { combineReducers } from 'redux';
import characters from './Characters'; //what we export from the other file in reducers
import question from './Jeopardy';

const marvelApp = combineReducers({
    characters,
    question
})

export default marvelApp //what the src/index.js is looking for to pass to the store