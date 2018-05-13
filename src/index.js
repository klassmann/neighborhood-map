// Author: Lucas Klassmann, <lucasklassmann@gmail.com>

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './css/variables.css';
import './css/index.css';
import './css/sidebar.css';
import './css/infowindow.css';
import './css/loading.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
