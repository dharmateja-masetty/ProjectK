import { Button, StyleSheet, Text, View, } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';


const ScreenSplash2 = ({ navigation }: { navigation: any }) => {
    return (
        <View><Text>{"This is profile"}</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default ScreenSplash2;


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