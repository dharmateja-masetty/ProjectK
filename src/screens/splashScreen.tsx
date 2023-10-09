import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, StyleSheet, Button } from "react-native";

export default function SplashScreen() {
    const navigation = useNavigation();
    const hasUnsavedChanges = Boolean(0);

    useEffect(
        () => {
            setTimeout(
                () => { navigation.navigate('Home' as never) }, 3000
            )

        }, []);
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                if (!hasUnsavedChanges) {
                    return;
                }
                e.preventDefault(); 
            }),
        // [navigation]
    );


    return (
        <>
            <Text>Wow screen!</Text>
        </>
    );
}