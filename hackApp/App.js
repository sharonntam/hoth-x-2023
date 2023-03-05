import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from './src/Pages/signup';
import FeedPage from './src/Pages/feed';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={SignUpPage} />
        <Stack.Screen name="feed" component={FeedPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;