import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Planets from '../src/Components/planets/PlanetsScreen';
import Peoples from '../src/Components/peoples/PeoplesScreen';
import PersonInfo from '../src/Components/peoples/PersonInfoScreen';
import Favorites from '../src/Components/favorite/FavoritesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PersonStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="Peoples"
        component={Peoples}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonInfo"
        component={PersonInfo}
        options={({route}) => ({title: route.params.person.name})}
      />
    </Stack.Navigator>
  );
}

function FavoritesStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#249ee4'},
      }}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonInfo"
        component={PersonInfo}
        options={({route}) => ({title: route.params.person.name})}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Planets" component={Planets} initialParams={true} />
        <Tab.Screen name="Peoples" component={PersonStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
