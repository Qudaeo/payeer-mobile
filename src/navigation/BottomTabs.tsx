import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletIcon from '../assets/svg/bottomTabs/wallet.svg';
import FilterIcon from '../assets/svg/bottomTabs/filter.svg';
import ExchangeIcon from '../assets/svg/bottomTabs/exchange.svg';
import AccountIcon from '../assets/svg/bottomTabs/account.svg';
import EmptyScreen from '../screens/EmptyScreen';
import {Route} from './routes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AccountScreen from '../screens/AccountScreen';
import {bottomTabs} from '../base/consts';
import WalletScreen from '../screens/WalletScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName={Route.Account}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerTransparent: true,
        tabBarActiveTintColor: bottomTabs.tabBarActiveTintColor,
        tabBarInactiveTintColor: bottomTabs.tabBarInactiveTintColor,
        tabBarStyle: {
          backgroundColor: bottomTabs.backgroundColor,
          borderTopWidth: 0,
          elevation: 0,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: bottomTabs.height + insets.bottom,
        },
        tabBarLabel: () => null,
      }}>
      <Tab.Screen
        name={Route.Wallet}
        component={WalletScreen}
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
        component={AccountScreen}
        options={{
          tabBarIcon: ({color}) => <AccountIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
