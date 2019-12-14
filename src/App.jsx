//React imports
import React from 'react';

//Onsen imports
import { Navigator } from 'react-onsenui';

//Import pages
import Home from './pages/Home'
import Order from './pages/Order'

//Import styles
import './App.css';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

/**
 * renderPage(props, navigator)
 * 
 * 
 * Oldal renderelés
 */
const renderPage = (route, navigator) => {
  const props = route.props || {};
  props.navigator = navigator;
  
  if (!props.order) {
    props.order = {
      dishes: [],
      restaurant: []
    }

  };

  return <route.component {...props} />;
}

/**
 * App
 * 
 * OnsenUI Navigator
 */
const App = () => {
  return (
    <Navigator animation="fade" initialRoute={{ component: Home, props: { key: 'Home' } }} renderPage={renderPage} />
  )
}

export default App;
