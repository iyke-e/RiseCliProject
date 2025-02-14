import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ProfileScreen from '../screens/profile/ProfileScreen';
import WalletScreen from '../screens/wallet/WalletScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShipmentScreen from '../screens/Shipments/ShipmentScreen';
import ScanScreen from '../screens/Scan/ScanScreen';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Shipment" component={ShipmentScreen} />
                <Tab.Screen name="Scan" component={ScanScreen} />
                <Tab.Screen name="Wallet" component={WalletScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default Navigator