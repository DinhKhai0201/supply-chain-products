import React from 'react';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Home from "../../../screens/home/home";
import Chat from "../../../screens/chat/chat";
import Search from "../../../screens/search/search";
import Setting from "../../../screens/setting/Setting";
import Notify from "../../../screens/notification/notify";

import Settings_Activity from '../../../components/Settings_Activity';
import Details_Activity from '../../../components/Details_Activity';
import Profile_Activity from '../../../components/Profile_Activity';
import HomeScreen from '../../../screens/account/HomeScreen';
import LoginScreen from '../../../screens/account/LoginScreen';
import RegisterScreen from '../../../screens/account/RegisterScreen';
import ForgotPasswordScreen from '../../../screens/account/ForgotPasswordScreen';
import Dashboard from '../../../screens/account/Dashboard';


const ChatComponentTab = createStackNavigator(
  {
    Chat: Chat
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#df3237',
      },
      headerTintColor: '#fff'
     
    },
  }
);

const SearchComponentTab = createStackNavigator(
  {
    Search: Search ,
    Category: Details_Activity
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#df3237',
      },
      headerTintColor: '#fff',
      headerShown: false      
     
    },
  }
);

const HomeTab = createStackNavigator(
  {
    Home: Home ,
    Details: Details_Activity
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#df3237',
      },
      headerTintColor: '#fff',
      title: 'Home',
     
    },
  }
);

const InfomationTab = createStackNavigator(
  {
    Notify: Notify
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#df3237',
      },
      headerTintColor: '#FFFFFF',
      title: 'Thông báo',
    },
  }
);

const ProfilesTab = createStackNavigator(
  {
    Main: Setting,
    HomeScreen: HomeScreen,
    LoginScreen: LoginScreen,
    RegisterScreen: RegisterScreen,
    ForgotPasswordScreen: ForgotPasswordScreen,
    Dashboard: Dashboard,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#df3237',
      },
      headerTintColor: '#fff',
      tabBarVisible:false,
      // title: 'Account',
     
    },
  }
);

const BaseNavigator = createBottomTabNavigator(
    {
    'Trang chủ': HomeTab ,
    'Thông báo': InfomationTab ,
    'Tìm kiếm': SearchComponentTab,
    'Trò chuyện': ChatComponentTab,
    'Tài khoản': ProfilesTab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Trang chủ') {
          return (
            <Icon
                    name="home"
                    color={tintColor}
                    size={24}
                />
          );
        } else if (routeName === 'Tài khoản') {
            return (
            <Icon
                    name="user-o"
                    color={tintColor}
                    size={24}
                />
            );
        } else if (routeName === 'Tìm kiếm') {
            return (
            <Icon
                    name="search"
                    color={tintColor}
                    size={24}
                />
            );
        } else if (routeName === 'Thông báo') {
          return (
          <Icon
                  name="envelope-open-o"
                  color={tintColor}
                  size={24}
              />
          );
      } 
        else {
          return (
            <Icon
                    name="comment-o"
                    color={tintColor}
                    size={24}
                />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff2600',
      inactiveTintColor: '#263238',
    },
  }
);

export default createAppContainer(BaseNavigator);
