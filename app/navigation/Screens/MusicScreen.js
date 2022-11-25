import * as React from "react";
import { Text, View, Button } from "react-native";
import { Audio } from "expo-av";
import {useEffect, useState} from "react";
// import coin2 from '../../../assets/sound/Sound_coins_2.mp3'


export default function MusicScreen() {

    const [sound, setSound] = useState(null);
    // const [sours, setSours] = useState()
    //
    //
    // let coin = '../../../assets/sound/Sound_coins.wav'
    // let door = '../../../assets/sound/Sound_steel_door.wav'
    // let sword = '../../../assets/sound/Sound_steel_door.wav'
    //
    // function start_play (item) {
    //     setSours(item)
    //     playSound(sours)
    // }

    async function playSound() {
        // console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/sound/Sound_coins_2.mp3')
            // require(sours)
        );
        setSound(sound);
        // console.log("Playing Sound");
         await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log("Unloading Sound");
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View>
                <Text>
                    the is music
                    <Button title="coins Sound" onPress={playSound} />


                </Text>
        </View>
    );
}
