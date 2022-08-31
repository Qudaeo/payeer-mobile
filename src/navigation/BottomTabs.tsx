import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletIcon from '../assets/svg/bottomTabs/wallet.svg';
import FilterIcon from '../assets/svg/bottomTabs/filter.svg';
import ExchangeIcon from '../assets/svg/bottomTabs/exchange.svg';
import AccountIcon from '../assets/svg/bottomTabs/account.svg';
import EmptyScreen from '../screens/EmptyScreen';
import {Route} from './routes';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName={Route.Account}
    screenOptions={{
      headerShown: false,
      headerShadowVisible: false,
      headerTransparent: true,
      tabBarActiveTintColor: '#03A9F4',
      tabBarInactiveTintColor: '#000000',
      tabBarStyle: {
        backgroundColor: '#FFFFFF80',
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabel: () => null,
    }}>
    <Tab.Screen
      name={Route.Wallet}
      component={EmptyScreen(Route.Wallet)}
      options={{
        tabBarIcon: ({color}) => <WalletIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name={Route.Filter}
      component={EmptyScreen(Route.Filter)}
      options={{
        tabBarIcon: ({color}) => <FilterIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name={Route.Exchange}
      component={EmptyScreen(Route.Exchange)}
      options={{
        tabBarIcon: ({color}) => <ExchangeIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name={Route.Account}
      component={EmptyScreen(Route.Account)}
      options={{
        tabBarIcon: ({color}) => <AccountIcon fill={color} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
