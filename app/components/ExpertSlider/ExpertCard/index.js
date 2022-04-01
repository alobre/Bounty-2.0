import React, {useState, useEffect} from 'react'
import { View, Image, ScrollView, Text, FlatList } from 'react-native'
import styles from './styles'

const ExpertCard = ({title, images, fee, user}) => {
    console.log({title, images, fee, user})
    const img = 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    return(
        <View style={styles.parent}>
            <Image styles={styles.images} source={{uri: img,}}/>
            <Text>{title}</Text>
        </View>
    )
}
export default ExpertCard;