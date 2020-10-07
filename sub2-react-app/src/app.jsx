import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'
import Router from './router'
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';


if (isInIcestark()) {
  registerAppEnter(() => {
    ReactDOM.render(  <Router />, getMountNode());
  });
  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(getMountNode());
  });
} else {
  ReactDOM.render(
    <Router />,
    document.querySelector('#ice-container')
  )
}