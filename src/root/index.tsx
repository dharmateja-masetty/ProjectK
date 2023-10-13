import { NavigationContainer, RouteProp } from "@react-navigation/native";
import ScreenSplash1 from "../screens/Screen1";
import ScreenSplash2 from "../screens/Screen2";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/splashScreen";

export type StackParamList = {
    Home: undefined;
    Profile: undefined;
    Splash: undefined;
};


const Stack = createNativeStackNavigator<StackParamList>();

export default function Index() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Home' component={ScreenSplash1} />
                <Stack.Screen name='Profile' component={ScreenSplash2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

