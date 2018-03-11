import {createStore} from 'redux';
import reducer from './reducer/reducer';

const initValues = {
    openLeftList: false,
    openRightList: false
};

const store = createStore(reducer, initValues);

export default store;