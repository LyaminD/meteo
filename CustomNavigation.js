import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import User from "./screens/User";
import Search from "./screens/Search";
import SessionOff from "./screens/SessionOff";

const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Accueil" component={Home} />
    </Stack.Navigator>
  );
};

export { FirstScreenNavigator };

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profil" component={User} />
    </Stack.Navigator>
  );
};

export { SecondScreenNavigator };

const ThirdScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Recherche" component={Search} />
    </Stack.Navigator>
  );
};

export { ThirdScreenNavigator };

const FourScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Déconnexion" component={SessionOff} />
    </Stack.Navigator>
  );
};

export { FourScreenNavigator };
