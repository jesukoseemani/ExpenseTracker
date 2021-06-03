import React from 'react';
import ReactDOM from 'react-dom';

import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';


import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="8ba8d72a-b6d9-45e9-8635-89b10f33123c" language="en-US">
    
    
    <Provider>
      <App />
    </Provider>
  
  
  </SpeechProvider>,
  document.getElementById('root'),
);
