import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScanScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >This is the ScanScreen</Text>
        </View>
    )
}

export default ScanScreen

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