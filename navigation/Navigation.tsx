import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GalleryScreen from "./Screens/GaleryScreen";
import InfoScreen from "./Screens/InfoScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator()

export default Navigation = () => {

    // const  DiceScreens =  () => {
    //     return (
    //         <Tab.Navigator>
    //             <Tab.Screen name='Home' component={HomeScreen} />
    //             <Tab.Screen name='Gallery' component={GalleryScreen} />
    //             <Tab.Screen name='Info' component={InfoScreen} />
    //             <Tab.Screen name='Settings' component={SettingsScreen} />
    //         </Tab.Navigator>
    //     )
    // }

    return (
        <NavigationContainer>
            {/*<Stack.Navigator>*/}
            {/*    <Stack.Screen name='home' component={HomeScreen}   />*/}
            {/*    <Stack.Screen name='Gallery' component={GalleryScreen}   />*/}
            {/*    <Stack.Screen name='Info' component={InfoScreen} />*/}
            {/*    <Stack.Screen name='Settings' component={SettingsScreen}  />*/}
            {/*</Stack.Navigator>*/}
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Gallery' component={GalleryScreen} />
                <Tab.Screen name='Info' component={InfoScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}
