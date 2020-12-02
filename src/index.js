import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const WidgetsDivs = document.querySelectorAll('.reddit_widget')

WidgetsDivs.forEach(Div => {
  console.log("lalala")
  console.log('Div', Div)
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={Div}/>
    </React.StrictMode>,
    Div
  )
})


