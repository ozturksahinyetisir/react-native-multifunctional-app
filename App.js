import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInfo from './src/screens/info/CourseInformation';
import CounterScreen from './src/screens/CounterScreen';
import CounterReducerScreen from './src/screens/CounterReducerScreen';
import BoxScreen from './src/screens/BoxScreen';
import ColorChangeScreen from './src/screens/ColorChangeScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import DesignScreen from './src/screens/DesignScreen';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="CoursesInfo" component={CoursesInfo} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="CounterReduce" component={CounterReducerScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="ColorChangeScreen" component={ColorChangeScreen} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="DesignScreen" component={DesignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title:{
    fontSize:30,
  },content:{
    flex:1,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent: 'center',
    marginVertical:3,
    fontSize:18,
    padding:20,
  }
});
