import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Login,Perfil} from './views';
import AreaRestrita from './views/arearestrita/AreaRestrita';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false}}
        />

        <Stack.Screen 
          name="AreaRestrita" 
          component={AreaRestrita}
          options={{ headerShown: false}}
        />

        <Stack.Screen 
          name="Perfil" 
          component={Perfil}
          options={{ headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
