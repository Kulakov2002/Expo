import * as React from "react";
import { View, Text,Image, StyleSheet } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { HomeStackNavigator, PoiskStackNavigator, FilmStackNavigator, RandomStackNavigator } from './StackNavigator';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () =>{
  return (
      <Tab.Navigator 
        tabBarOptions={{
          showLabel: false,
        }}
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            position: 'absolute',    
            padding: 5,
            bottom: 10,
            left: '5%',
            width: '90%',
            height: 50,
            paddingBottom: 10,
            borderRadius: 20, 
          },
        })}>
        <Tab.Screen name="Фильмы" component={FilmStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="image-inverted" color={color} size={22}/>
            ),
          }}/>
        <Tab.Screen name="Поиск" component={PoiskStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <View>
                <Ionicons name="search" color={color} size={size}
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    height: 50,
                    width: 70,
                    bottom: 10,
                    
                    backgroundColor: '#f4cccc',
                    borderRadius: 100,
                  }}
                />
              </View>
            ),
          }}/>

        <Tab.Screen name="Случайное" component={RandomStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <FontAwesome name="random" size={size} color={color} />
            ),
          }}/>
      </Tab.Navigator>
  );
}

export default Tabs;
