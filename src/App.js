import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomePage, ChatPage, CalendarPage } from './screens';

class Home extends Component {
  render() {
    return (
      <HomePage />
    );
  }
}
class Chat extends Component {
  render() {
    return (
      <ChatPage />
    );
  }
}
class Calendar extends Component {
  render() {
    return (
      <CalendarPage />
    );
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Chat',
    }
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      tabBarLabel: 'Calendar',
    }
  }
});