import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GalleryScreen from "./Screens/GaleryScreen";
import InfoScreen from "./Screens/InfoScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import {Image} from "react-native";
import popcorn from '../../assets/image/icons/popcorn.png'
import movies from '../../assets/image/icons/movies.png'
import movie from '../../assets/image/icons/movie.png'
import galery from '../../assets/image/icons/galery.png'
import MusicScreen from "./Screens/MusicScreen";

const Tab = createBottomTabNavigator();

// @ts-ignore
export default Navigations = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                tabBarActiveTintColor: 'red',
                    tabBarInactiveBackgroundColor:'blue',
                    tabBarActiveBackgroundColor: 'green',
            }}>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Image source={popcorn}
                               style={{width:30, height:30}}/>
                    )
                }}
                />
                <Tab.Screen name='Gallery' component={GalleryScreen}
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <Image
                                           source={galery}
                                           style={{width:30, height:30}}/>
                                )
                            }}
                />
                <Tab.Screen name='Info' component={InfoScreen}
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <Image source={movies}
                                           style={{width:30, height:30}}/>
                                )
                            }}
                />
                <Tab.Screen name='Settings' component={SettingsScreen}
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <Image source={movie}
                                           style={{width:30, height:30}}/>
                                )
                            }}
                />
                <Tab.Screen
                    name='Music'
                    component={MusicScreen}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image source={popcorn}
                                   style={{width:30, height:30}}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
