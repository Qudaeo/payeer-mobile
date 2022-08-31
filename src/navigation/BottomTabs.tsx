import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletIcon from '../assets/svg/bottomTabs/wallet.svg';
import FilterIcon from '../assets/svg/bottomTabs/filter.svg';
import ExchangeIcon from '../assets/svg/bottomTabs/exchange.svg';
import AccountIcon from '../assets/svg/bottomTabs/account.svg';
import EmptyScreen from '../screens/EmptyScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName={'Account'}
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
      name="Wallet"
      component={EmptyScreen('Wallet')}
      options={{
        tabBarIcon: ({color}) => <WalletIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name="Filter"
      component={EmptyScreen('Filter')}
      options={{
        tabBarIcon: ({color}) => <FilterIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name="Exchange"
      component={EmptyScreen('Exchange')}
      options={{
        tabBarIcon: ({color}) => <ExchangeIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name="Account"
      component={EmptyScreen('Account')}
      options={{
        tabBarIcon: ({color}) => <AccountIcon fill={color} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
