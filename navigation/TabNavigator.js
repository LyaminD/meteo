import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  FirstScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator,
  FourScreenNavigator,
} from "../CustomNavigation";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#00BCD4",
          },
        }}
      >
        <Tab.Screen
          name="Screen1"
          component={FirstScreenNavigator}
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen2"
          component={SecondScreenNavigator}
          options={{
            tabBarStyle: { display: "none" },
            tabBarLabel: "Profil",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Screen3"
          component={ThirdScreenNavigator}
          options={{
            tabBarLabel: "Recherche",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sync" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen4"
          component={FourScreenNavigator}
          options={{
            tabBarLabel: "Déconnexion",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="lock-open"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
