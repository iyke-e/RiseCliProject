import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShipmentScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>this is the ShipmentScreen</Text>
        </View>
    )
}

export default ShipmentScreen

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
})