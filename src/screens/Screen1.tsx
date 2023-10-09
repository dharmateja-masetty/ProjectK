import { Button, StyleSheet, Text, View, } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenSplash1({ navigation }: { navigation: any }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.flex1}>
                <Text style={styles.TextCenter}>{"H.O.M.E."}</Text>
            </View>

            <View>
                <Button
                    title="Go to profile"
                    onPress={() =>
                        navigation.navigate('Profile')
                    }
                />
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