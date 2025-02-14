import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WalletScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >WalletScreen</Text>
        </View>
    )
}

export default WalletScreen

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