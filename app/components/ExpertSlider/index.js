import React, {useState, useEffect} from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import ExpertCard from './ExpertCard'
import styles from './styles'

const ExpertSlider = ({title, experts}) => {
    const renderItem = ({item}) =>{
        return(
        <ExpertCard images={item.images} fee={item.fee} title={item.title} user={item.user}/>
        )
    }
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={experts}
                renderItem={renderItem}
                keyExtractor={(item)=> item.expertCardId}
            />
        </View>
    )
}
export default ExpertSlider;