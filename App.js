import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/Screens/Home';
import CommentSection from './app/Screens/CommentSection';
import NavigationHeader from './app/global/headers/NavigationHeader';
import SendOffer from './app/Screens/SendOffer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
            // header: AppBar,
            // headerShown: false,
          }}
          >
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          // header: AppBar,
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="CommentSection" 
        component={CommentSection} 
        options={{
          headerTitle: 'Home',
          // animationTypeForReplace: 'push',
          animation: 'slide_from_bottom'
        }}
        />
        <Stack.Screen 
        name="SendOffer" 
        component={SendOffer} 
        options={{
          headerTitle: 'Home',
          animation: 'slide_from_right'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}