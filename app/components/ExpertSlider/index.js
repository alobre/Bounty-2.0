import React, {useState, useEffect} from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import ExpertCard from './ExpertCard'
import styles from './styles'

const ExpertSlider = ({title, experts, navigation}) => {
    const renderItem = ({item}) =>{
        return(
        <ExpertCard images={item.images} priceRange={item.priceRange} title={item.title} user={item.user} navigation={navigation}/>
        )
    }
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={experts}
                renderItem={renderItem}
                keyExtractor={(item)=> item.expertCardId}
                horizontal
            />
        </View>
    )
}
export default ExpertSlider;