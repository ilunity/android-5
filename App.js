import {StyleSheet, View} from 'react-native';
import {NumberConverterView} from "./ui/components/NumberConverterView";
import {useCallback} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <NumberConverterView/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
