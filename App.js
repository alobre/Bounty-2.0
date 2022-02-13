import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/Screens/Home';
import CommentSection from './app/Screens/CommentSection';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
            // header: AppBar,
            headerShown: false,
          }}
          >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CommentSection" component={CommentSection}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}