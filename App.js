import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputActivities from './components/InputActivities';
import DisplayActivity from './components/DisplayActivity';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InputActivities">
        <Stack.Screen 
          name="InputActivities" 
          component={InputActivities} 
          options={{ title: 'Enter Activities' }}
        />
        <Stack.Screen 
          name="DisplayActivity" 
          component={DisplayActivity} 
          options={{ title: 'Activity Suggestion' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

