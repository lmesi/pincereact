import React from 'react';
import { Navigator } from 'react-onsenui';

import Home from './pages/Home'

import './App.css';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


const renderPage = (route, navigator) => {
  const props = route.props || {};
  props.navigator = navigator;

  return React.createElement(route.component, props);
}

const App = () => {
  return (
    <Navigator animation="fade" initialRoute={{ component: Home }} renderPage={renderPage} />
  )
}

export default App;
