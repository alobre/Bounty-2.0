import React from 'react'
import { View, Text, Image } from 'react-native'
import UserData from 'app/components/BountyCard/UserData'
import TabNavigation from './TabNavigation'
import styles from './styles'

const ExpertCardScreen = ({navigation, route}) => {
    const {title, images, priceRange, user, marginHorizontal} = route.params
    const dataArray = [{price: 5, currency: '€', info: 'Test'}, {price: 15, currency: '€', info: 'Test'}, {price: 30, currency: '€', info: 'Test'}]
    return(
        <View style={styles.parent}>
            <View>
                <Image style={styles.images} source={{uri: images[0]}}/>
                <View style={styles.userTitleWrap}>
                    <UserData user={user} navigation={navigation} size={30} fontSize={14}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <TabNavigation dataArray={dataArray}/>
            </View>
        </View>
    )
}
export default ExpertCardScreen