import {Image, Text, View} from "react-native";
import React from "react";
import logo from '../../../assets/image/logopop.png'



export default function HomeScreen() {
    return (
                <View className='flex-1 items-center justify-center'>
                    <Image source={logo} style={{width:180,  height:180}} />
                    <Text className=' text-red-600 text-center text-6xl'>
                        Home screen is hear
                    </Text>
                </View>


    );
}
