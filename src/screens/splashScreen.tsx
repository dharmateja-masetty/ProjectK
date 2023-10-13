import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Button } from "react-native";

export default function SplashScreen() {
    const navigation = useNavigation();
    const hasUnsavedChanges = Boolean(0);
    // const [splashCount, SetSplashCount] = useState<boolean> (false);
    // SetSplashCount(true);

    useEffect(
        () => {
            setTimeout(
                () => { navigation.navigate('Home' as never) }, 3000
            )

        }, []);
    // useEffect(
    //     () =>
    //         navigation.addListener('beforeRemove', (e) => {
    //             if (!splashCount) {
    //                 return;
    //             }
    //             e.preventDefault(); 
    //         }),
    // );

    return (
        <>
            <Text>Wow screen!</Text>
        </>
    );
}