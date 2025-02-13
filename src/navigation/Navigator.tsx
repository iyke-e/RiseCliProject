import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from './types';
import HomeScreen from '../screens/home/HomeScreen';
import AboutScreen from '../screens/about/AboutScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerTitleAlign: "center" }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='About' component={AboutScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator