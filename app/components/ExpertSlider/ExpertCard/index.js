import React, {useState, useEffect} from 'react'
import { View, Image, ScrollView, Text, FlatList } from 'react-native'
import styles from './styles'
import ProfilePic from 'app/components/BountyCard/ProfilePic'
import UserData from 'app/components/BountyCard/UserData'

const ExpertCard = ({title, images, priceRange, user, navigation}) => {
    console.log({title, images, priceRange, user})
    const img = 'https://reactnative-examples.com/wp-content/uploads/2021/10/white-lily.jpg'
    return(
        <View style={styles.parent}>
            <Image style={styles.images} source={{uri: images[0]}}/>
            <UserData user={user} navigation={navigation} size={30} fontSize={14}/>
            <Text style={styles.title}>{title}</Text>
            {
            priceRange.length == 3 ? 
            <Text style={styles.priceRange}>{priceRange[0]} - {priceRange[1]} {priceRange[2]}</Text>
            : 
            <Text style={styles.priceRange}>{priceRange[0]} {priceRange[1]}</Text>
            }
        </View>
    )
}
export default ExpertCard;