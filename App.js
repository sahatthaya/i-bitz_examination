import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/LoginScreen';
import Map from './src/screens/Map';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="map" component={Map} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App