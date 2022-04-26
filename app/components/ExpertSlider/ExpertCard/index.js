import React, {useState, useEffect} from 'react'
import { View, Image, ScrollView, Text, FlatList } from 'react-native'
import styles from './styles'
import ProfilePic from 'app/components/BountyCard/ProfilePic'
import UserData from 'app/components/BountyCard/UserData'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const ExpertCard = ({title, images, priceRange, user, navigation, marginHorizontal}) => {
    return(
        <View style={[styles.parent, marginHorizontal && {marginHorizontal}]}>
            <View>
                <Image style={styles.images} source={{uri: images[0]}}/>
                <UserData user={user} navigation={navigation} size={30} fontSize={14}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.priceRangeParent}>
                {
                priceRange.length == 3 ? 
                <Text style={styles.priceRange}>{priceRange[0]} - {priceRange[1]} {priceRange[2]}</Text>
                : 
                <Text style={styles.priceRange}>{priceRange[0]} {priceRange[1]}</Text>
                }
            </View>
        </View>
    )
}
export default ExpertCard;