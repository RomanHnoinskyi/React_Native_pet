import {Image, Text, View} from "react-native";
import React from "react";

export default function Card( {product}) {
    return (
        <View
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <Image source={product.image} className="w-1/6"  />
            <Text>{ product.title }</Text>
            <Text className="font-bold">{product.price}</Text>


                <Text>{ product.description }</Text>



        </View>
    );
}
