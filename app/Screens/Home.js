import React from 'react';
import { View, Text } from 'react-native';
import BountyCard from '../components/BountyCard';
export default Home = ({navigation}) =>{
    const description = `Ich benötige folgende Dinge:Bananen, Milch, Toastbrot, Butter, 200g Haussalami, Tiefkühlpizza (Salami), Schafkäse, Tomaten, Mozzerella.
    Bei Interesse bitte Schreiben!`;
    const user = {
        profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        username: 'Mark Mayer',
        rating: '4.9',
    };
    return(
        <View>
            <BountyCard title="Einkaufen gehen" description={description} user={user}  />
        </View>
    )
}
