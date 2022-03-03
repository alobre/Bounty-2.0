import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/Screens/Home';
import CommentSection from './app/Screens/CommentSection';
import MessageScreen from './app/Screens/MessageScreen';
import NavigationHeader from './app/global/headers/NavigationHeader';
import SendOffer from './app/Screens/SendOffer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          // header: AppBar,
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="CommentSection"
        component={CommentSection}
        options={{
          headerTitle: 'Home',
          // animationTypeForReplace: 'push',
          animation: 'slide_from_bottom',
        }}
      />
      <HomeStack.Screen
        name="SendOffer"
        component={SendOffer}
        options={{
          headerTitle: 'Home',
          animation: 'slide_from_right',
        }}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Icon name="chat" color={color} size={26} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
