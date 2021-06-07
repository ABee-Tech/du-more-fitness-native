import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SessionsScreen from './screens/SessionsScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


// const instance = axios.create({});



const Tab = createStackNavigator();

const BotomTabs = createBottomTabNavigator();
const HomeScreenStack = createStackNavigator();
const SettingsScreenStack = createStackNavigator();

const HomeScreenScreen = () => (
  <HomeScreenStack.Navigator>
    <HomeScreenStack.Screen name="Programs" component={HomeScreen} options={({route})=>(
      {
        title: "Du More Fitness | Programs"
      }
    )}/>
    <HomeScreenStack.Screen name="Sessions" component={SessionsScreen} options={({route})=>(
      {
        title: route.params.name + " | Sessions"
      }
    )}/>
    <HomeScreenStack.Screen name="Exercises" component={ExercisesScreen} options={({route})=>(
      {
        title: route.params.name + " | Exercises"
      }
    )}/>
  </HomeScreenStack.Navigator>
)

const SettingsScreenScreen = () => (
  <SettingsScreenStack.Navigator>
    <SettingsScreenStack.Screen name="Settings" component={SettingsScreen}/>
  </SettingsScreenStack.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <BotomTabs.Navigator initialroutename="Settings" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <BotomTabs.Screen name="Home" component={HomeScreenScreen} />
        <BotomTabs.Screen name="Settings" component={SettingsScreenScreen} />
      </BotomTabs.Navigator>
    </NavigationContainer>
  );
}

