/**
 * Feito por Kaian Cotias :)
 * 30/08/2018
 */

import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import AreaTrabalho from './src/screens/AreaTrabalho';
import Form2 from './src/screens/Form2';
import Form from './src/screens/Form';
import Config from './config/Config';

const RootStack = createStackNavigator(
  {
     HomeScreen,
     AreaTrabalho,
     Form2,
     Form
  },
  {
    initialRouteName: Config.telas[0].tela
  }

);


export default class App extends Component {

 
  render() {

    return <RootStack />;
  
  }
}
