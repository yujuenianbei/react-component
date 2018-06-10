import { createStore } from 'redux';
import reducer from './reducer/reducer'

const initValue = {
    leftMenu: false
}
const store = createStore(reducer, initValue);
export default store;