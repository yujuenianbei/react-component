import {createStore} from 'redux';
import reducer from '../todo/todo/reducer.js';



const store = createStore(reducer, {});

export default store;