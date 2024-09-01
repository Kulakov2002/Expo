// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PoiskScreen from '../components/screen/PoiskScreen';

import FilmScreen from '../components/screen/FilmScreen';
import RandomScreen from '../components/screen/RandomScreen';
import MovesScreen from '../components/screen/MovesScreen';


const Stack = createStackNavigator();

const FilmStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Фильмы" component={FilmScreen} />
      <Stack.Screen name="Фильм" component={MovesScreen} />

    </Stack.Navigator>
  );
}

const PoiskStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Поиск" component={PoiskScreen}
        options={{
          headerShown: false,
        }}/>
      <Stack.Screen name="Фильм" component={MovesScreen} />
      
    </Stack.Navigator>
  );
}

const RandomStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Случайное" component={RandomScreen} />
    </Stack.Navigator>
  );
}


export { PoiskStackNavigator, FilmStackNavigator, RandomStackNavigator };