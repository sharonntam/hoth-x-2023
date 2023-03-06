// import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from './src/Pages/signup';
import TasksPage from './src/Pages/tasks';
import FeedPage from './src/Pages/feed';
import FriendsPage from './src/Pages/friends';
import HomePage from './src/Pages/homepage';
import PicturePage from './src/Pages/picture';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signUp'>
        <Stack.Screen name='signUp' component={SignUpPage} options={{ title: "Welcome"}} />
        <Stack.Screen name='home' component={HomePage} options={{ title: "Home"}} />
        <Stack.Screen name='tasks' component={TasksPage} options={{ title: "Tasks"}}/>
        <Stack.Screen name='feed' component={FeedPage} options={{ title: "Feed"}}/>
        <Stack.Screen name='friends' component={FriendsPage} options={{ title: "Friends"}}/>
        <Stack.Screen name='picture' component={PicturePage} options={{ title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;