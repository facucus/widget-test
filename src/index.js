import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const WidgetsDivs = document.querySelectorAll('.bspk-chat-widget')

WidgetsDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={Div}/>
    </React.StrictMode>,
    Div
  )
})


