import React from 'react';
import ReactDOM from 'react-dom';

import App from './TabList/tab';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// import Tab from './tab/tab';
// ReactDOM.render(<Tab />, document.getElementById('root'));
registerServiceWorker();
