import React, { Component } from 'react';
import { View } from 'react-native';
import { Root, StyleProvider } from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import LoginScreen from './screens/LoginScreen';
import Drawer from './Drawer';
import PickListScreen from './screens/PickListScreen';
import PickGroupDetailScreen from './screens/PickGroupDetailScreen';
import ReturnGroupDetailScreen from './screens/ReturnGroupDetailScreen';
import PickOrderScreen from './screens/PickOrderScreen';
import POUpdateWeightSizeScreen from './screens/POUpdateWeightSizeScreen';
import ReturnOrderScreen from './screens/ReturnOrderScreen';
import DeliveryListScreen from './screens/DeliveryListScreen';
import DeliveryOrderScreen from './screens/DeliveryOrderScreen';
import DeliveryGroupCreateScreen from './screens/DeliveryGroupCreateScreen';
import ReturnListScreen from './screens/ReturnListScreen';
import OrderListScreen from './screens/OrderListScreen';
import TripListScreen from './screens/TripListScreen';
import AddOrderScreen from './screens/AddOrderScreen';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import platform from '../native-base-theme/variables/platform';

if (false || (process.env.NODE_ENV || '').toLowerCase() === 'production') {
  // disable console. log in production
  console.log = function () {};
  console.info = function () {};
  console.warn = function () {};
  console.error = function () {};
  console.debug = function () {};
}

//export const store = configureStore();
class App extends Component {
  render() {
    console.log('Root render');
    const { store } = this.props;
    const AppNavigator = StackNavigator(
      {
        Login: { screen: LoginScreen },
        Drawer: { screen: Drawer },
        DeliveryList: { screen: DeliveryListScreen },
        DeliveryGroupCreate: { screen: DeliveryGroupCreateScreen },
        PickList: { screen: PickListScreen },
        TripList: { screen: TripListScreen },
        PickGroupDetail: { screen: PickGroupDetailScreen },
        ReturnGroupDetail: { screen: ReturnGroupDetailScreen },
        PickOrder: { screen: PickOrderScreen },
        POUpdateWeightSize: { screen: POUpdateWeightSizeScreen },
        ReturnOrder: { screen: ReturnOrderScreen },
        DeliveryOrder: { screen: DeliveryOrderScreen },
        ReturnList: { screen: ReturnListScreen },
        OrderList: { screen: OrderListScreen },
        AddOrder: { screen: AddOrderScreen }
      },
      {
        initialRouteName: 'Login',
        headerMode: 'none',
      }
    );
    return (
      <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme(platform)}>
            <AppNavigator />
          </StyleProvider>
        </Root>
      </Provider>
    );
  }
}

App.defaultProps = {
  store: configureStore()
};

export default App;
