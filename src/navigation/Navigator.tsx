import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
import ShipmentScreen from '../screens/Shipments/ShipmentScreen';
import ScanScreen from '../screens/Scan/ScanScreen';
import Boxes from '../assets/svg/boxes.svg';
import Wallet from '../assets/svg/wallet.svg';
import Barcode from '../assets/svg/barcode.svg';
import Avatar from '../assets/svg/avatar.svg';
import AvatarActive from '../assets/svg/avatarActive.svg';
import BoxesActive from '../assets/svg/boxesActive.svg';
import WalletActive from '../assets/svg/walletActive.svg';
import BarcodeActive from '../assets/svg/barcodeActive.svg';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        switch (route.name) {
                            case 'Shipment':
                                return focused ? <BoxesActive width={size} height={size} /> : <Boxes width={size} height={size} />;
                            case 'Scan':
                                return focused ? <BarcodeActive width={size} height={size} /> : <Barcode width={size} height={size} />;
                            case 'Wallet':
                                return focused ? <WalletActive width={size} height={size} /> : <Wallet width={size} height={size} />;
                            case 'Profile':
                                return focused ? <AvatarActive width={size} height={size} /> : <Avatar width={size} height={size} />;
                            default:
                                return null;
                        }
                    },
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: '#007BFF',
                    tabBarInactiveTintColor: '#888',
                })}
            >
                <Tab.Screen name="Shipment" component={ShipmentScreen} />
                <Tab.Screen name="Scan" component={ScanScreen} />
                <Tab.Screen name="Wallet" component={WalletScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
