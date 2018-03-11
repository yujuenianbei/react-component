// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './TabList/tab';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // import Tab from './tab/tab';
// // ReactDOM.render(<Tab />, document.getElementById('root'));
// registerServiceWorker();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import store from './todo/store';
// import App from './todo/todo';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     ,
// document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// UI框架
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//  自定义主题
import muiTheme from './material/views/theme'

import store from './material/store';
// 页面元素
import Main from './material/views/main';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Main />
        </MuiThemeProvider>
    </Provider>
    ,
document.getElementById('root'));
registerServiceWorker();
