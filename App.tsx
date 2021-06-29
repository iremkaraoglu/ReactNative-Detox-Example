/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import Onboarding from './pages/onboarding';
import { createStackNavigator } from '@react-navigation/stack';
import ListCourses from './pages/listCourses';
import Register from './pages/register';


const App = () => {
  return (
    <MyStack/>
  );
};

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ title: '' }}
        />
        <Stack.Screen name="ListCourses" component={ListCourses} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
marginTop: { marginTop:36}

});

export default App;
