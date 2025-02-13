import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Profile Screen</Text>
            <View style={styles.buttonContainer}>
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go to About" onPress={() => navigation.navigate('About')} />
            </View>
        </View>
    )
}

export default ProfileScreen


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        marginBottom: 30
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20

    },
    button: {
        paddingBlock: 10,
        paddingInline: 15,
    }
})