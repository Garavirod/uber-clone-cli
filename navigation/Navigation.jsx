import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/* Screens */
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';


const Stack = createNativeStackNavigator();

function TabNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeScreen' 
                component={HomeScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name='MapScreen' 
                component={MapScreen} 
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <TabNavigation />
            </SafeAreaProvider>
        </NavigationContainer>
    )
}