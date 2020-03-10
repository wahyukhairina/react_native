import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/components/redux/store';

import Login from './src/components/screen/login/Login'

const AppNavigator = createSwitchNavigator(
  {
  Home: Login
  }
)

const AppContainer = createAppContainer(AppNavigator)

function App(){
  return(
    <Provider store={store}>
      < AppContainer />
    </Provider>
  )
}

export default App