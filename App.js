import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, StackActions, createNavigationContainerRef, useNavigationContainerRef  } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/Screens/Home';
import CommentSection from './app/Screens/CommentSection';
import MessageScreen from './app/Screens/MessageScreen';
import ChatScreen from './app/Screens/ChatScreen';
import NavigationHeader from './app/global/headers/NavigationHeader';
import ProfileScreen from './app/Screens/ProfileScreen';
import CategoryScreen from './app/Screens/CategoryScreen';
import SendOffer from './app/Screens/SendOffer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ChatScreenHeader from './app/Screens/ChatScreen/ChatScreenHeader';
import ExpertScreen from './app/Screens/ExpertScreen';
import {Provider} from 'react-redux'
import {Store} from './app/redux/store'

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
      <HomeStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: 'Messages',
          animation: 'slide_from_right',
        }}
      />
      <HomeStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          animation: 'slide_from_right',
        }}
      />
    </HomeStack.Navigator>
  );
};

const MessageStack = createNativeStackNavigator();

const MessageStackScreen = () => {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          headerTitle: 'Messages',
          animation: 'slide_from_right',
        }}
      />
      <MessageStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: 'Messages',
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <MessageStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          animation: 'slide_from_right',
        }}
      />
    </MessageStack.Navigator>
  );
};

const ExpertStack = createNativeStackNavigator();

const ExpertStackScreen = () => {
  return (
    <ExpertStack.Navigator>
      <ExpertStack.Screen
        name="Experts"
        component={ExpertScreen}
        options={{
          headerTitle: 'Experts',
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <ExpertStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          animation: 'slide_from_right',
        }}
      />
      <ExpertStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        // options={({route})=>{
        //   title: route.params.title,
        //   // headerTitle: 'CategoryScreen',
        //   // headerShown: false,
        //   animation: 'slide_from_right',
        // }}
        options={({route}) => ({
          title: route.params.title, 
          animation: 'slide_from_right'
        })}
      />
    </ExpertStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
          />
           <Tab.Screen
          name="ExpertScreen"
          component={ExpertStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Experts',
            tabBarIcon: ({ color }) => (
              <Entypo name="slideshare" color={color} size={26} />
            ),
          }}
          />
          <Tab.Screen
          name="Messages"
          component={MessageStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="chat" color={color} size={26} />
            ),
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
