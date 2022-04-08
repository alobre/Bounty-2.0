import React, {useState, useEffect} from 'react'
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native'
import ExpertCard from './ExpertCard'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'app/global/variables/colors'

const ExpertSlider = ({title, category_id, experts, navigation}) => {
    const renderItem = ({item}) =>{
        return(
        <ExpertCard images={item.images} priceRange={item.priceRange} title={item.title} user={item.user} navigation={navigation}/>
        )
    }
    const openCategory = (category_id) => {
        // console.log(category_id)
        navigation.navigate('CategoryScreen', {category_id, title})
    }
    return(
        <View>
            <TouchableOpacity onPress={()=>openCategory(category_id)} style={styles.titleIconWrap}>
                <Text style={styles.title}>{title}</Text>
                <Icon name="arrow-drop-down" size={30} color={colors.black}/>
            </TouchableOpacity>
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