import { StyleSheet, Text, View, } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ScreenSplash1() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.flex1}>
                <Text style={styles.TextCenter}>{"TEJ"}</Text>
            </View>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    TextCenter: {
        fontWeight: 'bold',
        fontSize: 50,

        backgroundColor: 'lightgreen',
    },
    flex1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'lightblue',

    }

})