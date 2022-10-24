import {Image, Text, View} from "react-native";
import React from "react";

import logo from '../../assets/image/logopop.png'


export default function HomeScreen() {
    return (

            <View className='flex flex-row'>
                             <Image source={logo} style={{width:180,  height:180}} />
                         <Text className='text-9xl'>
                            Home screen is hear
                        </Text>
            </View>
    );
}
